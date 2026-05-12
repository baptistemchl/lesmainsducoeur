import { Instagram, Mail, Phone, Heart } from "lucide-react"
import { navItems } from "../../data/navigation"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #3B1F65 100%)" }}>
      <div className="section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(196, 181, 253, 0.15)" }}>
          {/* Identité */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-dark.svg"
                alt="Les Mains du Coeur"
                className="h-16 w-auto flex-shrink-0"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div className="flex flex-col leading-tight">
                <p className="font-cormorant text-2xl font-light" style={{ color: "rgba(237,233,254,0.95)" }}>
                  Les Mains<br />du Coeur
                </p>
              </div>
            </div>
            <p className="font-sans text-xs tracking-widest uppercase" style={{ color: "rgba(168,139,250,0.5)" }}>
              Sarah
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(168,139,250,0.5)" }}>
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
              href="mailto:lesmainsducoeur22@gmail.com"
              className="flex items-center gap-2 font-sans text-sm transition-colors duration-200"
              style={{ color: "rgba(196,181,253,0.6)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "rgba(237,233,254,0.9)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.6)"}
            >
              <Mail size={14} />
              lesmainsducoeur22@gmail.com
            </a>
            <a
              href="tel:+33673426895"
              className="flex items-center gap-2 font-sans text-sm transition-colors duration-200"
              style={{ color: "rgba(196,181,253,0.6)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "rgba(237,233,254,0.9)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.6)"}
            >
              <Phone size={14} />
              06 73 42 68 95
            </a>
            <a
              href="https://www.instagram.com/les_mainsducoeur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm transition-colors duration-200 mt-1"
              style={{ color: "rgba(196,181,253,0.6)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#EFB8B8"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(196,181,253,0.6)"}
            >
              <Instagram size={14} />
              @les_mainsducoeur
            </a>
            <p className="font-sans text-xs mt-3 leading-relaxed" style={{ color: "rgba(168,139,250,0.5)" }}>
              Du lundi au samedi · 9h – 18h<br />
              Séances sur rendez-vous
            </p>
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

          <details className="font-sans text-xs leading-relaxed max-w-3xl group">
            <summary
              className="cursor-pointer select-none transition-colors duration-200 hover:text-warm-300"
              style={{ color: "rgba(196,181,253,0.5)", outline: "none" }}
            >
              Mentions légales & politique de confidentialité
            </summary>
            <div className="mt-3 flex flex-col gap-2.5 pl-1" style={{ color: "rgba(168,139,250,0.45)" }}>
              <div>
                <p style={{ color: "rgba(196,181,253,0.6)" }} className="font-semibold mb-0.5">Éditeur du site</p>
                <p>
                  Sarah · Les Mains du Cœur — micro-entrepreneur, SIRET 992&nbsp;732&nbsp;537&nbsp;00012<br />
                  17 rue du Pré d'Aublé, 22400 Saint-Alban, France<br />
                  Directrice de la publication : Sarah
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(196,181,253,0.6)" }} className="font-semibold mb-0.5">Hébergeur</p>
                <p>
                  o2switch (SAS) — 222 boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France<br />
                  Tél. : 04 44 44 60 40 — <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-300">www.o2switch.fr</a>
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(196,181,253,0.6)" }} className="font-semibold mb-0.5">Données personnelles (RGPD)</p>
                <p>
                  Les informations saisies dans le formulaire de contact sont utilisées
                  <strong> uniquement</strong> pour répondre à votre demande. Aucune donnée n'est
                  partagée à un tiers, aucune newsletter automatique, aucun cookie de suivi ou
                  d'analyse n'est déposé sur ce site. Conformément au RGPD, vous disposez d'un
                  droit d'accès, de rectification et de suppression de vos données — adressez votre
                  demande à <a href="mailto:lesmainsducoeur22@gmail.com" className="underline hover:text-warm-300">lesmainsducoeur22@gmail.com</a>.
                </p>
              </div>
              <div>
                <p style={{ color: "rgba(196,181,253,0.6)" }} className="font-semibold mb-0.5">Propriété intellectuelle</p>
                <p>
                  Les textes, photographies et éléments graphiques de ce site sont la propriété
                  de Sarah · Les Mains du Cœur. Toute reproduction sans autorisation est interdite.
                </p>
              </div>
            </div>
          </details>

          <p className="font-sans text-xs flex items-center gap-1.5 flex-wrap" style={{ color: "rgba(168,139,250,0.4)" }}>
            © {year} Les Mains du Coeur — Sarah · SIRET 992&nbsp;732&nbsp;537&nbsp;00012{" "}
            <span className="font-hand text-sm" style={{ color: "rgba(211, 105, 105, 0.6)" }}>
              Fait avec <Heart size={11} className="inline" /> en France
            </span>
          </p>
          <p className="font-sans text-xs" style={{ color: "rgba(168,139,250,0.35)" }}>
            Conçu par{" "}
            <a
              href="https://www.instagram.com/agenceixp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 underline decoration-dotted underline-offset-2"
              style={{ color: "rgba(196,181,253,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EFB8B8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(196,181,253,0.55)")}
            >
              Agence IXP
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
