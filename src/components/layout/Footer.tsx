import { Instagram, Mail, Phone, Heart } from "lucide-react"
import { navItems } from "../../data/navigation"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-warm-900 text-warm-300">
      <div className="section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-warm-800/60">
          {/* Identité */}
          <div className="flex flex-col gap-3">
            <p className="font-cormorant text-2xl font-light text-warm-100 leading-tight">
              Les Mains<br />du Coeur
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-warm-500">
              Sarah Gueuné
            </p>
            <p className="font-sans text-sm text-warm-500 leading-relaxed mt-1">
              Soins énergétiques et accompagnement intuitif, avec douceur et bienveillance.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <p className="font-sans text-xs tracking-widest uppercase text-warm-500 mb-2">Navigation</p>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm text-warm-400 hover:text-warm-100 transition-colors duration-200 w-fit"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-xs tracking-widest uppercase text-warm-500 mb-2">Contact</p>
            <a
              href="mailto:contact@lesmainsdocoeur.fr"
              className="flex items-center gap-2 font-sans text-sm text-warm-400 hover:text-warm-100 transition-colors duration-200"
            >
              <Mail size={14} />
              contact@lesmainsdocoeur.fr
            </a>
            <a
              href="tel:+33600000000"
              className="flex items-center gap-2 font-sans text-sm text-warm-400 hover:text-warm-100 transition-colors duration-200"
            >
              <Phone size={14} />
              +33 6 00 00 00 00
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm text-warm-400 hover:text-rose-light transition-colors duration-200 mt-1"
            >
              <Instagram size={14} />
              @lesmainsdocoeur
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-7 flex flex-col gap-3">
          <p className="font-sans text-xs text-warm-600 leading-relaxed max-w-2xl">
            <span className="text-warm-500">Note importante :</span> Les soins énergétiques
            s'inscrivent dans une démarche de bien-être et d'accompagnement personnel. Ils ne
            constituent en aucun cas un acte médical et ne remplacent ni un suivi médical,
            ni psychiatrique, ni psychologique. En cas de problème de santé, consultez toujours
            un professionnel de santé qualifié.
          </p>
          <p className="font-sans text-xs text-warm-600 flex items-center gap-1.5">
            © {year} Les Mains du Coeur — Sarah Gueuné. Fait avec{" "}
            <Heart size={11} className="text-rose/60 inline" /> en France.
          </p>
        </div>
      </div>
    </footer>
  )
}
