import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations"

const pillars = [
  {
    icon: "✦",
    title: "Douceur",
    text: "Aucune violence, aucune contrainte. Les soins s'invitent avec légèreté, au rythme qui est le vôtre.",
  },
  {
    icon: "◈",
    title: "Intuition",
    text: "Chaque séance est guidée par une écoute fine et une présence sensible, non par un protocole rigide.",
  },
  {
    icon: "❋",
    title: "Intégrité",
    text: "Pas de promesses excessives, pas de discours dogmatique — seulement une pratique sincère et éthique.",
  },
  {
    icon: "⟡",
    title: "Ancrage",
    text: "Le spirituel et le concret marchent ensemble. L'énergie se vit dans le corps, dans le quotidien.",
  },
]

export function PhilosophySection() {
  return (
    <section id="approche" className="section-padding bg-warm-900 relative overflow-hidden">
      {/* Halos décoratifs inversés */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F2D6D3 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4DDD0 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <motion.div
          className="flex flex-col gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Grande citation centrale */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <p className="section-label text-rose-light/70 mb-6">Notre philosophie</p>
            <blockquote>
              <p className="font-cormorant text-4xl lg:text-5xl font-light text-warm-100 italic leading-[1.2] tracking-tight">
                "Le soin énergétique n'est pas une magie mystérieuse — c'est une présence
                offerte, un espace créé, une écoute qui va au-delà des mots."
              </p>
            </blockquote>
          </motion.div>

          {/* Piliers */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={scaleIn}
                className="flex flex-col gap-3 p-6 rounded-2xl border border-warm-700/40 hover:border-rose/30 bg-warm-800/30 transition-all duration-300"
              >
                <span className="text-xl text-rose/60">{pillar.icon}</span>
                <h3 className="font-cormorant text-xl font-medium text-warm-100">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-warm-500 leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Texte d'approche */}
          <motion.div
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <p className="font-sans text-sm text-warm-300 leading-relaxed">
              L'approche de Sarah s'inscrit dans le champ du bien-être et de l'accompagnement
              énergétique contemporain. Elle n'oppose pas le rationnel et le sensible — elle les
              invite à coexister, à se compléter. Ce qui se passe en séance n'a pas besoin d'être
              expliqué pour être ressenti.
            </p>
            <p className="font-sans text-sm text-warm-300 leading-relaxed">
              Les soins énergétiques constituent un accompagnement complémentaire, jamais un
              substitut à un suivi médical ou psychologique. Ils s'adressent à celles et ceux
              qui souhaitent prendre soin d'eux-mêmes autrement — avec curiosité et ouverture.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
