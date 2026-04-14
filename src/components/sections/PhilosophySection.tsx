import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations"

const pillars = [
  {
    icon: "✦",
    title: "Douceur",
    text: "Aucune violence, aucune contrainte. Les soins s'invitent avec légèreté, au rythme qui est le vôtre.",
    gradient: "from-rose-light/30 to-blush/20",
  },
  {
    icon: "◈",
    title: "Intuition",
    text: "Chaque séance est guidée par une écoute fine et une présence sensible, non par un protocole rigide.",
    gradient: "from-sage-light/30 to-sage-pale/20",
  },
  {
    icon: "❋",
    title: "Intégrité",
    text: "Pas de promesses excessives, pas de discours dogmatique — seulement une pratique sincère et éthique.",
    gradient: "from-gold-soft/30 to-gold-pale/20",
  },
  {
    icon: "⟡",
    title: "Ancrage",
    text: "Le spirituel et le concret marchent ensemble. L'énergie se vit dans le corps, dans le quotidien.",
    gradient: "from-rose-light/30 to-sage-light/20",
  },
]

export function PhilosophySection() {
  return (
    <section id="approche" className="section-padding bg-warm-900 relative overflow-hidden">
      {/* Halos décoratifs animés */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-12 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F2D6D3 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-12 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4DDD0 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
            <p className="section-label text-rose-light/80 mb-6">Notre philosophie</p>
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
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-col gap-3 p-6 rounded-2xl border border-warm-700/40 hover:border-rose/40 bg-warm-800/30 hover:bg-warm-800/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Gradient de fond au hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <motion.span
                  className="relative text-xl text-rose/60 group-hover:text-rose-light group-hover:scale-125 transition-all duration-300 origin-left"
                >
                  {pillar.icon}
                </motion.span>
                <h3 className="relative font-cormorant text-xl font-medium text-warm-100">
                  {pillar.title}
                </h3>
                <p className="relative font-sans text-sm text-warm-300 leading-relaxed">{pillar.text}</p>
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
