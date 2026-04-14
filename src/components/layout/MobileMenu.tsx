import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { NavItem } from "../../data/navigation"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  items: NavItem[]
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const handleNavClick = (href: string) => {
    onClose()
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }, 200)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-warm-900/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 h-full w-72 bg-ivory shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-blush/30">
              <span className="font-cormorant text-xl font-medium text-warm-900">Menu</span>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-blush/50 flex items-center justify-center text-warm-700 hover:bg-blush/20 transition-colors"
                aria-label="Fermer le menu"
              >
                <X size={16} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col gap-1 p-6">
              {items.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left font-cormorant text-2xl font-light text-warm-800 hover:text-rose-deep py-2 transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="p-6 border-t border-blush/30">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary w-full justify-center"
              >
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
