'use client'

import Link from 'next/link'
import { FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import { GiLotus } from 'react-icons/gi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sage-800 text-cream-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1: Logo et description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GiLotus className="w-10 h-10 text-gold-400" />
              <h3 className="text-2xl font-serif font-semibold">Les Mains du Cœur</h3>
            </div>
            <p className="text-cream-200 leading-relaxed mb-4">
              Magnétiseur et soins énergétiques pour retrouver votre équilibre intérieur 
              et votre bien-être.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/les_mainsducoeur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-cream-200 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/soins', label: 'Soins proposés' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/temoignages', label: 'Témoignages' },
                { href: '/rendez-vous', label: 'Prendre RDV' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-200 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold-400">
              Contact
            </h4>
            <ul className="space-y-3 text-cream-200">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold-400 mt-1 flex-shrink-0" />
                <span>Rennes, Bretagne</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-gold-400 mt-1 flex-shrink-0" />
                <a href="tel:+33600000000" className="hover:text-gold-400 transition-colors">
                  06 00 00 00 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-gold-400 mt-1 flex-shrink-0" />
                <a href="mailto:contact@lesmainsducoeur.fr" className="hover:text-gold-400 transition-colors">
                  contact@lesmainsducoeur.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-sage-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream-300 text-sm">
            <p>
              © {currentYear} Les Mains du Cœur. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2">
              <span>Fait avec</span>
              <FaHeart className="text-gold-400" />
              <span>pour votre bien-être</span>
            </div>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-gold-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-gold-400 transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
