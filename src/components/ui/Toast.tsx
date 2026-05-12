import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, X } from 'lucide-react'
import { useEffect } from 'react'

export type ToastVariant = 'success' | 'error'

export interface ToastData {
  id: number
  variant: ToastVariant
  title: string
  description?: string
}

interface ToastProps {
  toast: ToastData | null
  onClose: () => void
  duration?: number
}

const variantStyles: Record<ToastVariant, { bg: string; ring: string; iconColor: string; titleColor: string; Icon: typeof CheckCircle2 }> = {
  success: {
    bg: 'rgba(255, 255, 255, 0.92)',
    ring: 'rgba(88, 129, 87, 0.35)',
    iconColor: '#588157',
    titleColor: '#2D1B4E',
    Icon: CheckCircle2,
  },
  error: {
    bg: 'rgba(255, 255, 255, 0.92)',
    ring: 'rgba(211, 105, 105, 0.45)',
    iconColor: '#9E2E2E',
    titleColor: '#2D1B4E',
    Icon: AlertCircle,
  },
}

export function Toast({ toast, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(onClose, duration)
    return () => window.clearTimeout(id)
  }, [toast, onClose, duration])

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[1000] pointer-events-none flex flex-col items-end gap-3 max-w-[calc(100%-3rem)]"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96, transition: { duration: 0.18 } }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            role={toast.variant === 'error' ? 'alert' : 'status'}
            className="pointer-events-auto flex items-start gap-3 min-w-[280px] max-w-sm px-4 py-3.5 rounded-2xl shadow-card"
            style={{
              background: variantStyles[toast.variant].bg,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${variantStyles[toast.variant].ring}`,
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            {(() => {
              const Icon = variantStyles[toast.variant].Icon
              return <Icon size={20} style={{ color: variantStyles[toast.variant].iconColor }} className="flex-shrink-0 mt-0.5" />
            })()}

            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <p className="font-sans text-sm font-semibold leading-tight" style={{ color: variantStyles[toast.variant].titleColor }}>
                {toast.title}
              </p>
              {toast.description && (
                <p className="font-sans text-xs text-warm-700 leading-snug">{toast.description}</p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer la notification"
              className="text-warm-500 hover:text-warm-900 transition-colors flex-shrink-0 -mr-1 -mt-1 p-1 rounded-full hover:bg-warm-100"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
