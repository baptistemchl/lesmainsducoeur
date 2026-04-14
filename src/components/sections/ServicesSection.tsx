import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { ServiceCard } from "../ui/ServiceCard"
import { services } from "../../data/services"
import { staggerContainer } from "../../lib/animations"

export function ServicesSection() {
  return (
    <section id="soins" className="section-padding bg-ivory relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"
        style={{ background: "radial-gradient(circle, #D4DDD0 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4"
        style={{ background: "radial-gradient(circle, #F2D6D3 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
        >
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Réserver une séance
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
