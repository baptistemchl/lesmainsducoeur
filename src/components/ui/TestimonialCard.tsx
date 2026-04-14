import { motion } from "framer-motion"
import type { Testimonial } from "../../data/testimonials"
import { fadeInUp } from "../../lib/animations"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl p-7 lg:p-8 shadow-card border border-blush/20 flex flex-col gap-5 group hover:shadow-card-hover hover:border-rose-light/40 transition-all duration-300"
    >
      <span className="font-cormorant text-6xl text-rose/50 group-hover:text-rose-deep/60 leading-none select-none transition-colors duration-300" aria-hidden="true">
        "
      </span>

      <p className="font-sans text-warm-700 text-sm leading-relaxed italic flex-1 -mt-4">
        {testimonial.content}
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-blush/25">
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #DDB8B4 0%, #B5726A 100%)" }}>
          <span className="font-cormorant text-white font-medium text-sm">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-sans text-sm font-medium text-warm-900">{testimonial.author}</p>
          {testimonial.role && (
            <p className="font-sans text-xs text-warm-500">{testimonial.role}</p>
          )}
        </div>
        {testimonial.service && (
          <span className="ml-auto font-sans text-xs text-rose-deep font-medium bg-blush/40 px-3 py-1 rounded-full">
            {testimonial.service}
          </span>
        )}
      </div>
    </motion.article>
  )
}
