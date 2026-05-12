import { useCallback, useRef, useState } from 'react'
import type { ToastData } from '../components/ui/Toast'

export interface ContactFormValues {
  name: string
  email: string
  phone: string
  service: string
  message: string
  rgpd: boolean
  /** Champ honeypot — laissé vide par les humains, rempli par les bots */
  botcheck: string
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  rgpd: false,
  botcheck: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Délai minimum entre l'ouverture du formulaire et l'envoi (anti-bot client) */
const MIN_FILL_TIME_MS = 3000

/** Endpoint PHP servi par o2switch */
const CONTACT_ENDPOINT = '/contact.php'

type ErrorMap = Partial<Record<keyof ContactFormValues, string>>

function validate(values: ContactFormValues): ErrorMap {
  const errors: ErrorMap = {}
  if (!values.name.trim()) errors.name = 'Votre nom est requis'
  if (!values.email.trim()) errors.email = 'Votre email est requis'
  else if (!emailRegex.test(values.email)) errors.email = 'Adresse email invalide'
  if (!values.message.trim()) errors.message = 'Votre message est requis'
  if (!values.rgpd) errors.rgpd = 'Merci de confirmer votre accord'
  return errors
}

interface Options {
  onToast: (toast: Omit<ToastData, 'id'>) => void
}

export function useContactForm({ onToast }: Options) {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ErrorMap>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const mountedAtRef = useRef<number>(Date.now())

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const target = e.target
      const name = target.name as keyof ContactFormValues
      const value =
        target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value
      setValues((prev) => ({ ...prev, [name]: value }))
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    },
    [errors],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      // Anti-bot 1 — honeypot
      if (values.botcheck) {
        setValues(initialValues)
        return
      }

      // Anti-bot 2 — délai minimum (les bots remplissent en < 1s)
      const elapsed = Date.now() - mountedAtRef.current
      if (elapsed < MIN_FILL_TIME_MS) {
        setValues(initialValues)
        return
      }

      const validationErrors = validate(values)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }

      setStatus('sending')

      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        service: values.service,
        message: values.message.trim(),
        rgpd: values.rgpd,
        botcheck: '',
      }

      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })

        let data: { success: boolean; message?: string }
        try {
          data = await res.json()
        } catch {
          throw new Error(`Le serveur a renvoyé une réponse invalide (HTTP ${res.status})`)
        }

        if (!res.ok || !data.success) {
          throw new Error(data.message ?? `HTTP ${res.status}`)
        }

        setStatus('success')
        setValues(initialValues)
        setErrors({})
        mountedAtRef.current = Date.now()
        onToast({
          variant: 'success',
          title: 'Message envoyé ✦',
          description: 'Sarah vous répondra sous 48h. Belle journée à vous.',
        })
      } catch (err) {
        setStatus('error')
        onToast({
          variant: 'error',
          title: "Le message n'a pas pu partir",
          description:
            err instanceof Error && err.message
              ? `${err.message}. Vous pouvez aussi joindre Sarah au 06 73 42 68 95.`
              : 'Réessayez ou contactez Sarah au 06 73 42 68 95.',
        })
      }
    },
    [values, onToast],
  )

  return { values, errors, status, handleChange, handleSubmit }
}
