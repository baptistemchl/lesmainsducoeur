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
    <div style={{ borderBottom: "1px solid rgba(251, 207, 232, 0.4)" }} className="last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-cormorant text-xl font-medium text-warm-900 group-hover:text-rose transition-colors duration-200 leading-snug">
          {entry.question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            border: open ? "1px solid rgba(232, 67, 147, 0.5)" : "1px solid rgba(251, 207, 232, 0.6)",
            background: open ? "rgba(232, 67, 147, 0.1)" : "transparent",
            color: "#E84393",
          }}
        >
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
