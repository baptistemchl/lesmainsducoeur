import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import type { FaqEntry } from "../../data/faq"

interface FaqItemProps {
  entry: FaqEntry
}

export function FaqItem({ entry }: FaqItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-blush/40 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-cormorant text-xl font-medium text-warm-900 group-hover:text-rose-deep transition-colors duration-200 leading-snug">
          {entry.question}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-blush flex items-center justify-center text-rose group-hover:bg-blush/40 transition-all duration-200">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-warm-700 text-sm leading-relaxed pb-5 pr-10">
              {entry.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
