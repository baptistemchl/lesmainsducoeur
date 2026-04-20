import { motion } from "framer-motion"
import { Star } from "lucide-react"
import type { Testimonial } from "../../data/testimonials"
import { fadeInUp } from "../../lib/animations"

const accentColors = ["#D36969", "#8B5CF6", "#F59E0B", "#FB7185"]

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const color = accentColors[(parseInt(testimonial.id) - 1) % accentColors.length]

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

      {/* Petites étoiles */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={13} fill={color} stroke="none" style={{ opacity: 0.6 }} />
        ))}
      </div>

      {/* Contenu — manuscrit, personnel */}
      <p className="font-hand text-lg lg:text-xl text-warm-800 leading-snug flex-1">
        {testimonial.content}
      </p>

      {/* Auteur — une ligne, moderne */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: color }}
        />
        <p className="font-sans text-sm text-warm-900 font-semibold">
          {testimonial.author}
        </p>
        {(testimonial.role || testimonial.service) && (
          <p className="font-sans text-xs text-warm-500">
            {[testimonial.role, testimonial.service].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </motion.article>
  )
}
