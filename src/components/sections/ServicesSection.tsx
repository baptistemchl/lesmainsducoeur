import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { ServiceCard } from "../ui/ServiceCard"
import { services } from "../../data/services"
import { waveStagger } from "../../lib/animations"

export function ServicesSection() {
  return (
    <section id="soins" className="section-padding bg-ivory relative overflow-hidden">
      {/* Orbes décoratifs */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(196,181,253,0.3) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.32) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Orbe doré */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="section-container relative">
        <SectionHeading
          label="Soins proposés"
          title="Des accompagnements choisis avec soin"
          subtitle="Chaque soin est proposé dans un esprit d'ouverture et de respect. Que vous traversiez une période difficile, que vous cherchiez à vous reconnecter à vous-même ou simplement à souffler — il y a un espace pour vous ici."
          centered
          className="mb-14"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={waveStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        >
          <p className="font-hand text-lg text-warm-500">un soin pensé pour vous</p>
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Premier échange
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
