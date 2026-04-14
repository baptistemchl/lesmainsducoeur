import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { TestimonialCard } from "../ui/TestimonialCard"
import { testimonials } from "../../data/testimonials"
import { staggerContainer } from "../../lib/animations"

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="section-padding bg-ivory relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #F2D6D3 0%, transparent 70%)" }}
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>

        <motion.div
          className="ornament mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ✦
        </motion.div>
      </div>
    </section>
  )
}
