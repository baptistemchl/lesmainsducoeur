import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { TestimonialCard } from "../ui/TestimonialCard"
import { testimonials, aggregate } from "../../data/testimonials"
import { waveStagger } from "../../lib/animations"

export function TestimonialsSection() {
  const hasGoogle = testimonials.some((t) => t.source === "google")
  const ratingLabel = aggregate.rating != null ? aggregate.rating.toFixed(1).replace(".", ",") : null

  return (
    <section id="temoignages" className="section-padding bg-ivory relative overflow-hidden">
      {/* Orbe central */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(239,184,184,0.25) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orbe violet */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(196,181,253,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="section-container relative">
        <SectionHeading
          label="Témoignages"
          title="Ce qu'elles & ils ont vécu"
          subtitle="Ces mots sont partagés avec gratitude et authenticité — chaque expérience est personnelle, et la vôtre sera unique."
          centered
          className="mb-10"
        />

        {/* Bandeau aggregate Google */}
        {hasGoogle && ratingLabel && (
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex items-center gap-3 px-5 py-2.5 rounded-full"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
              }}
            >
              <span className="font-sans text-2xl font-semibold text-warm-900">{ratingLabel}</span>
              <div className="flex gap-0.5" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                ))}
              </div>
              <span className="font-sans text-sm text-warm-600">
                sur <strong className="text-warm-900">{aggregate.totalReviews}</strong>{" "}
                avis Google
              </span>
            </div>

            {aggregate.writeReviewLink && (
              <a
                href={aggregate.writeReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-vibrant text-white font-sans text-sm font-medium hover:bg-rose-deep transition-colors"
              >
                <Star size={14} fill="white" stroke="none" />
                Laisser un avis sur Google
              </a>
            )}
          </motion.div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
          variants={waveStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} placeLink={aggregate.profileLink} />
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-hand text-xl text-rose/60">merci pour votre confiance ✦</p>
        </motion.div>
      </div>
    </section>
  )
}
