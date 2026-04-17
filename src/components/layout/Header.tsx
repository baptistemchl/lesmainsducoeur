import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useScrolled } from "../../hooks/useScrolled"
import { MobileMenu } from "./MobileMenu"
import { navItems } from "../../data/navigation"

export function Header() {
  const scrolled = useScrolled(30)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "py-3 shadow-header"
            : "bg-transparent py-5"
        }`}
        style={scrolled ? {
          background: "rgba(253, 242, 248, 0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        } : {}}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col leading-none group"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <span className="font-cormorant text-xl font-medium text-warm-900 group-hover:text-rose transition-colors duration-200">
              Les Mains du Coeur
            </span>
            <span className="font-sans text-[10px] tracking-widest text-warm-500 uppercase">
              Sarah Gueuné
            </span>
          </a>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm text-warm-700 hover:text-rose transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-rose hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              className="hidden lg:inline-flex btn-primary text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Rendez-vous
            </motion.a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-warm-800 hover:bg-blush/30 active:bg-blush/50 transition-colors"
              style={{ border: "1px solid rgba(253, 121, 168, 0.4)" }}
              aria-label="Ouvrir le menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} items={navItems} />
    </>
  )
}
