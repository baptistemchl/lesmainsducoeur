import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { TestimonialCard } from "../ui/TestimonialCard"
import { testimonials } from "../../data/testimonials"
import { waveStagger } from "../../lib/animations"

export function TestimonialsSection() {
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
          className="mb-14"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
          variants={waveStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
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
