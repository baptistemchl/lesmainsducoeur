import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, zenReveal, waveStagger } from "../../lib/animations"

const pillars = [
  {
    icon: "✦",
    title: "Douceur",
    text: "Aucune violence, aucune contrainte. Les soins s'invitent avec légèreté, au rythme qui est le vôtre.",
    gradient: "from-rose-light/40 to-rose-muted/20",
    glow: "rgba(232, 67, 147, 0.15)",
  },
  {
    icon: "◈",
    title: "Intuition",
    text: "Chaque séance est guidée par une écoute fine et une présence sensible, non par un protocole rigide.",
    gradient: "from-sage-light/40 to-sage-pale/20",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  {
    icon: "❋",
    title: "Intégrité",
    text: "Pas de promesses excessives, pas de discours dogmatique — seulement une pratique sincère et éthique.",
    gradient: "from-gold-soft/40 to-gold-pale/20",
    glow: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: "⟡",
    title: "Ancrage",
    text: "Le spirituel et le concret marchent ensemble. L'énergie se vit dans le corps, dans le quotidien.",
    gradient: "from-coral-light/40 to-rose-muted/20",
    glow: "rgba(251, 113, 133, 0.15)",
  },
]

export function PhilosophySection() {
  return (
    <section id="approche" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #3B1F65 50%, #2D1B4E 100%)" }}>
      {/* Halos décoratifs animés */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(232,67,147,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Halo doré */}
      <motion.div
        className="absolute top-1/2 right-0 w-72 h-72 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="section-container relative">
        <motion.div
          className="flex flex-col gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Grande citation centrale — zen reveal */}
          <motion.div variants={zenReveal} className="text-center max-w-3xl mx-auto">
            <p className="section-label mb-6" style={{ opacity: 0.8 }}>Notre philosophie</p>
            <blockquote
              className="rounded-3xl px-8 py-6 lg:px-12 lg:py-8"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <p className="font-hand text-3xl lg:text-4xl leading-snug" style={{ color: "rgba(237,233,254,0.9)" }}>
                "Le soin énergétique n'est pas une magie mystérieuse — c'est une présence
                offerte, un espace créé, une écoute qui va au-delà des mots."
              </p>
            </blockquote>
          </motion.div>

          {/* Piliers — wave stagger */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={waveStagger}
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={zenReveal}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-col gap-3 p-6 rounded-2xl border border-white/10 hover:border-rose/30 transition-all duration-300 group overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Gradient de fond au hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Glow au hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 30px ${pillar.glow}` }}
                />

                <motion.span
                  className="relative text-xl transition-all duration-300 origin-left"
                  style={{ color: "rgba(232, 67, 147, 0.6)" }}
                >
                  <span className="group-hover:hidden">{pillar.icon}</span>
                  <span className="hidden group-hover:inline text-rose-light group-hover:scale-125">{pillar.icon}</span>
                </motion.span>
                <h3 className="relative font-cormorant text-xl font-medium" style={{ color: "rgba(237,233,254,0.95)" }}>
                  {pillar.title}
                </h3>
                <p className="relative font-sans text-sm leading-relaxed" style={{ color: "rgba(196,181,253,0.7)" }}>{pillar.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Texte d'approche */}
          <motion.div
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(196,181,253,0.65)" }}>
              L'approche de Sarah s'inscrit dans le champ du bien-être et de l'accompagnement
              énergétique contemporain. Elle n'oppose pas le rationnel et le sensible — elle les
              invite à coexister, à se compléter. Ce qui se passe en séance n'a pas besoin d'être
              expliqué pour être ressenti.
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(196,181,253,0.65)" }}>
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
