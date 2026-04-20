import { Instagram, Mail, Phone, Heart } from "lucide-react"
import { navItems } from "../../data/navigation"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #3B1F65 100%)" }}>
      <div className="section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(196, 181, 253, 0.15)" }}>
          {/* Identité */}
          <div className="flex flex-col gap-3">
            <p className="font-cormorant text-2xl font-light leading-tight" style={{ color: "rgba(237,233,254,0.95)" }}>
              Les Mains<br />du Coeur
            </p>
            <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "rgba(168,139,250,0.5)" }}>
              Sarah Gueuné
            </p>
            <p className="font-sans text-sm leading-relaxed mt-1" style={{ color: "rgba(168,139,250,0.5)" }}>
              Soins énergétiques et accompagnement intuitif, avec douceur et bienveillance.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(168,139,250,0.5)" }}>Navigation</p>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm w-fit transition-colors duration-200"
                style={{ color: "rgba(196,181,253,0.6)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "rgba(237,233,254,0.9)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.6)"}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(168,139,250,0.5)" }}>Contact</p>
            <a
              href="mailto:contact@lesmainsdocoeur.fr"
              className="flex items-center gap-2 font-sans text-sm transition-colors duration-200"
              style={{ color: "rgba(196,181,253,0.6)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "rgba(237,233,254,0.9)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.6)"}
            >
              <Mail size={14} />
              contact@lesmainsdocoeur.fr
            </a>
            <a
              href="tel:+33600000000"
              className="flex items-center gap-2 font-sans text-sm transition-colors duration-200"
              style={{ color: "rgba(196,181,253,0.6)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "rgba(237,233,254,0.9)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.6)"}
            >
              <Phone size={14} />
              +33 6 00 00 00 00
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm transition-colors duration-200 mt-1"
              style={{ color: "rgba(196,181,253,0.6)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#EFB8B8"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.6)"}
            >
              <Instagram size={14} />
              @lesmainsdocoeur
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-7 flex flex-col gap-3">
          <p className="font-sans text-xs leading-relaxed max-w-2xl" style={{ color: "rgba(168,139,250,0.4)" }}>
            <span style={{ color: "rgba(196,181,253,0.6)" }}>Note importante :</span> Les soins énergétiques
            s'inscrivent dans une démarche de bien-être et d'accompagnement personnel. Ils ne
            constituent en aucun cas un acte médical et ne remplacent ni un suivi médical,
            ni psychiatrique, ni psychologique. En cas de problème de santé, consultez toujours
            un professionnel de santé qualifié.
          </p>
          <p className="font-sans text-xs flex items-center gap-1.5" style={{ color: "rgba(168,139,250,0.4)" }}>
            © {year} Les Mains du Coeur — Sarah Gueuné.{" "}
            <span className="font-hand text-sm" style={{ color: "rgba(211, 105, 105, 0.6)" }}>
              Fait avec <Heart size={11} className="inline" /> en France
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
