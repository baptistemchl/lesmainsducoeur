import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { FaqItem } from "../ui/FaqItem"
import { faqEntries } from "../../data/faq"
import { staggerContainer, fadeInUp } from "../../lib/animations"

export function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* En-tête à gauche */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              label="FAQ"
              title="Vos questions, nos réponses"
              subtitle="Vous avez des doutes ou des interrogations ? C'est tout à fait naturel. Voici les questions les plus souvent posées — avec des réponses honnêtes et sans détour."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <p className="font-sans text-sm text-warm-600 leading-relaxed mb-4">
                Une question non listée ? Sarah se fera un plaisir de vous répondre directement.
              </p>
              <a href="#contact" className="btn-soft text-sm">
                Poser une question
              </a>
            </motion.div>
          </div>

          {/* Accordéon à droite */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-card border border-blush/20 overflow-hidden"
            >
              <div className="px-6 lg:px-8">
                {faqEntries.map((entry) => (
                  <FaqItem key={entry.id} entry={entry} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
