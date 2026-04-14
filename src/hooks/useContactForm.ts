import { useState, useCallback } from 'react'

export interface ContactFormValues {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Valide les champs du formulaire, retourne un objet d'erreurs */
function validate(values: ContactFormValues): Partial<Record<keyof ContactFormValues, string>> {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {}
  if (!values.name.trim()) errors.name = 'Votre nom est requis'
  if (!values.email.trim()) errors.email = 'Votre email est requis'
  else if (!emailRegex.test(values.email)) errors.email = 'Adresse email invalide'
  if (!values.message.trim()) errors.message = 'Votre message est requis'
  return errors
}

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setValues((prev) => ({ ...prev, [name]: value }))
      // Efface l'erreur dès que l'utilisateur modifie le champ
      if (errors[name as keyof ContactFormValues]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }))
      }
    },
    [errors]
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const validationErrors = validate(values)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }

      setStatus('sending')
      // Simulation d'un envoi — à remplacer par un vrai appel API
      setTimeout(() => {
        setStatus('success')
        setValues(initialValues)
      }, 1600)
    },
    [values]
  )

  return { values, errors, status, handleChange, handleSubmit }
}
