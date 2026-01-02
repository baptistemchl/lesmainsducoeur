'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { GiLotus } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/soins', label: 'Soins' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/temoignages', label: 'Témoignages' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <GiLotus className={`w-8 h-8 transition-colors ${
              isScrolled ? 'text-gold-500' : 'text-gold-400'
            } group-hover:text-gold-600`} />
            <span className={`text-xl font-serif font-semibold transition-colors ${
              isScrolled ? 'text-sage-800' : 'text-sage-800'
            }`}>
              Les Mains du Cœur
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-gold-600 ${
                  isScrolled ? 'text-sage-700' : 'text-sage-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rendez-vous"
              className="px-6 py-2 bg-sage-600 text-cream-50 rounded-full hover:bg-sage-700 transition-all duration-300 hover:shadow-lg font-medium"
            >
              Rendez-vous
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sage-800 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-cream-50 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sage-700 hover:text-gold-600 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/rendez-vous"
                  className="block text-center px-6 py-3 bg-sage-600 text-cream-50 rounded-full hover:bg-sage-700 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Rendez-vous
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
