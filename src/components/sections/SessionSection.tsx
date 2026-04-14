import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { staggerContainer, fadeInUp, popIn } from "../../lib/animations"

const steps = [
  {
    number: "01",
    title: "L'accueil",
    description:
      "Avant tout soin, un échange doux s'installe. Sarah vous accueille sans agenda, sans précipitation. Vous partagez ce qui vous amène, ce que vous portez, ce dont vous avez besoin — ou simplement vous arrivez, et c'est suffisant.",
    detail: "En présentiel ou à distance · 10 à 15 min",
  },
  {
    number: "02",
    title: "Le soin",
    description:
      "Vous restez habillé(e), allongé(e) confortablement. Sarah travaille par imposition des mains ou dans votre champ énergétique, guidée par sa sensibilité et son intention de bien. Aucune douleur, aucune intrusion.",
    detail: "45 à 75 min selon le soin choisi",
  },
  {
    number: "03",
    title: "L'intégration",
    description:
      "Après le soin, un temps de retour à soi. On échange doucement — ce que vous avez ressenti, ce qui a bougé. Sarah vous invite à prendre soin de vous les jours suivants, à observer, à laisser travailler.",
    detail: "10 à 15 min · Conseils d'après-séance",
  },
]

export function SessionSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="section-container">
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
          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute top-10 left-[calc(16.66%)] right-[calc(16.66%)] h-px bg-gradient-to-r from-rose-light via-rose to-rose-light opacity-50 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-6 gap-4"
            >
              {/* Numéro — gradient + glow */}
              <motion.div
                variants={popIn}
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-soft"
                style={{
                  background: "linear-gradient(135deg, #FAF7F2 0%, #F2D6D3 50%, #DDB8B4 100%)",
                }}
                whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
              >
                <span className="font-cormorant text-2xl font-semibold text-rose-deep">
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
                <p className="font-sans text-xs text-rose-deep font-medium mt-1">{step.detail}</p>
              </div>

              {/* Séparateur mobile */}
              {i < steps.length - 1 && (
                <div className="lg:hidden w-8 h-px bg-gradient-to-r from-transparent via-rose/50 to-transparent mx-auto" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Note rassurante */}
        <motion.div
          className="mt-14 p-6 lg:p-8 rounded-2xl border border-rose-light/40 max-w-2xl mx-auto text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          style={{
            background: "linear-gradient(135deg, rgba(242,214,211,0.3) 0%, rgba(212,221,208,0.2) 100%)",
          }}
        >
          <p className="font-cormorant text-xl font-light text-warm-800 italic relative">
            "Vous n'avez pas besoin de tout comprendre avant de venir. Vous avez juste besoin
            d'un peu d'espace pour vous."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
