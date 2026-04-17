import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { staggerContainer, bounceIn } from "../../lib/animations"

const steps = [
  {
    number: "01",
    title: "L'accueil",
    description:
      "Avant tout soin, un échange doux s'installe. Sarah vous accueille sans agenda, sans précipitation. Vous partagez ce qui vous amène, ce que vous portez, ce dont vous avez besoin — ou simplement vous arrivez, et c'est suffisant.",
    detail: "En présentiel ou à distance · 10 à 15 min",
    color: "#E84393",
  },
  {
    number: "02",
    title: "Le soin",
    description:
      "Vous restez habillé(e), allongé(e) confortablement. Sarah travaille par imposition des mains ou dans votre champ énergétique, guidée par sa sensibilité et son intention de bien. Aucune douleur, aucune intrusion.",
    detail: "45 à 75 min selon le soin choisi",
    color: "#8B5CF6",
  },
  {
    number: "03",
    title: "L'intégration",
    description:
      "Après le soin, un temps de retour à soi. On échange doucement — ce que vous avez ressenti, ce qui a bougé. Sarah vous invite à prendre soin de vous les jours suivants, à observer, à laisser travailler.",
    detail: "10 à 15 min · Conseils d'après-séance",
    color: "#F59E0B",
  },
]

export function SessionSection() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Orbe subtil */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(196,181,253,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative">
        <SectionHeading
          label="Déroulé d'une séance"
          title="Simple, doux, à votre rythme"
          subtitle="Une séance avec Sarah ne ressemble à rien d'anxiogène. Pas de rituel imposant, pas de jargon hermétique. Juste un espace de soin, pensé pour que vous vous sentiez en sécurité."
          className="mb-14"
        />

        <motion.div
          className="flex flex-col lg:flex-row gap-6 lg:gap-0 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Ligne de connexion desktop — très discrète */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(16.66%)] right-[calc(16.66%)] h-px z-0 bg-rose-muted/30"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={bounceIn}
              className="relative flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-6 gap-4"
            >
              {/* Numéro — glass circle */}
              <motion.div
                variants={bounceIn}
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(12px)",
                  border: `2px solid ${step.color}30`,
                  boxShadow: `0 0 20px ${step.color}15`,
                }}
                whileHover={{
                  scale: 1.12,
                  boxShadow: `0 0 40px ${step.color}40`,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <span
                  className="font-cormorant text-2xl font-semibold"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>
              </motion.div>

              {/* Contenu */}
              <div className="flex flex-col gap-2">
                <h3 className="font-cormorant text-2xl font-medium text-warm-900">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-warm-700 leading-relaxed">
                  {step.description}
                </p>
                <p
                  className="font-sans text-xs font-semibold mt-1"
                  style={{ color: step.color }}
                >
                  {step.detail}
                </p>
              </div>

              {/* Séparateur mobile */}
              {i < steps.length - 1 && (
                <div
                  className="lg:hidden w-8 h-px mx-auto"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${step.color}50, transparent)`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Note rassurante — glass effect */}
        <motion.div
          className="mt-14 p-6 lg:p-8 rounded-2xl max-w-2xl mx-auto text-center relative overflow-hidden border border-rose-muted/30"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(16px)",
          }}
        >
          <p className="font-hand text-xl lg:text-2xl text-warm-700 relative leading-snug">
            "Vous n'avez pas besoin de tout comprendre avant de venir.
            Vous avez juste besoin d'un peu d'espace pour vous."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
