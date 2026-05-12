import { motion } from "framer-motion"
import { Star } from "lucide-react"
import type { Testimonial } from "../../data/testimonials"
import { fadeInUp } from "../../lib/animations"

const accentColors = ["#D36969", "#8B5CF6", "#F59E0B", "#FB7185"]
const MAX_CONTENT_LENGTH = 280

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
  /** Lien vers la fiche Google pour "lire l'avis complet" */
  placeLink?: string | null
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  return (parts[0]?.[0] ?? "?") + (parts[1]?.[0] ?? "")
}

/** Tronque proprement à la fin d'un mot, ajoute `…` */
function truncate(text: string): { display: string; truncated: boolean } {
  if (text.length <= MAX_CONTENT_LENGTH) return { display: text, truncated: false }
  const cut = text.slice(0, MAX_CONTENT_LENGTH)
  const lastBreak = Math.max(cut.lastIndexOf(' '), cut.lastIndexOf('\n'))
  const end = lastBreak > 200 ? lastBreak : MAX_CONTENT_LENGTH
  return { display: text.slice(0, end).trimEnd() + ' …', truncated: true }
}

export function TestimonialCard({ testimonial, index = 0, placeLink }: TestimonialCardProps) {
  const color = accentColors[index % accentColors.length]
  const isGoogle = testimonial.source === "google"
  const stars = testimonial.rating ?? 5
  const { display, truncated } = truncate(testimonial.content)

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -5, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
      className="rounded-2xl p-7 lg:p-8 flex flex-col gap-5 group transition-all duration-300 relative overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      {/* Accent bar en haut */}
      <div
        className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
        style={{ background: color, opacity: 0.4 }}
      />

      {/* En-tête : avatar + auteur + (date) + badge Google */}
      <header className="flex items-center gap-3">
        {isGoogle && testimonial.authorPhoto ? (
          <img
            src={testimonial.authorPhoto}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-1 ring-white/60"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-sans text-xs font-semibold text-white ring-1 ring-white/60"
            style={{ background: color }}
            aria-hidden
          >
            {getInitials(testimonial.author)}
          </div>
        )}

        <div className="flex flex-col min-w-0 flex-1">
          <p className="font-sans text-sm text-warm-900 font-semibold truncate">
            {testimonial.author}
          </p>
          {(testimonial.dateLabel || testimonial.role || testimonial.service) && (
            <p className="font-sans text-xs text-warm-500 truncate">
              {[testimonial.dateLabel, testimonial.role, testimonial.service].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>

        {isGoogle && (
          <a
            href={testimonial.authorLink ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/70 ring-1 ring-warm-200 hover:bg-white transition-colors flex-shrink-0"
            aria-label="Voir l'avis sur Google"
            title="Voir l'avis sur Google"
          >
            <GoogleGlyph />
            <span className="font-sans text-[10px] font-semibold text-warm-700 hidden sm:inline">
              Avis Google
            </span>
          </a>
        )}
      </header>

      {/* Étoiles */}
      <div className="flex gap-1" aria-label={`${stars} étoiles sur 5`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < stars ? color : "transparent"}
            stroke={color}
            strokeWidth={1.5}
            style={{ opacity: i < stars ? 0.9 : 0.25 }}
          />
        ))}
      </div>

      {/* Contenu — serif pour les vrais avis (lisibilité avec emojis), manuscrit pour fallback */}
      <div className="flex flex-col gap-2 flex-1">
        <p
          className={
            isGoogle
              ? "font-cormorant text-base lg:text-[17px] text-warm-800 leading-relaxed whitespace-pre-line"
              : "font-hand text-lg lg:text-xl text-warm-800 leading-snug"
          }
        >
          {display}
        </p>

        {truncated && isGoogle && placeLink && (
          <a
            href={placeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-medium self-start mt-0.5 transition-colors duration-200 hover:underline"
            style={{ color }}
          >
            Lire l'avis complet sur Google →
          </a>
        )}
      </div>
    </motion.article>
  )
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden focusable="false">
      <path fill="#4285F4" d="M22.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.55c2.08-1.91 3.23-4.74 3.23-8.33Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.27-2.65l-3.55-2.77c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC04" d="M5.85 14.11A6.6 6.6 0 0 1 5.5 12c0-.74.13-1.45.35-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.67-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.07.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.67 2.84C6.71 7.31 9.14 5.38 12 5.38Z" />
    </svg>
  )
}
