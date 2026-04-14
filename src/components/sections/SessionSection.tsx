import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { staggerContainer, fadeInUp } from "../../lib/animations"

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
          <div className="hidden lg:block absolute top-10 left-[calc(16.66%)] right-[calc(16.66%)] h-px bg-gradient-to-r from-blush via-rose-light to-blush opacity-40 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-6 gap-4"
            >
              {/* Numéro */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-ivory border border-blush/50 shadow-card flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-2xl font-light text-rose-deep">
                  {step.number}
                </span>
              </div>

              {/* Contenu */}
              <div className="flex flex-col gap-2">
                <h3 className="font-cormorant text-2xl font-medium text-warm-900">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-warm-700 leading-relaxed">
                  {step.description}
                </p>
                <p className="font-sans text-xs text-rose/80 mt-1">{step.detail}</p>
              </div>

              {/* Séparateur mobile */}
              {i < steps.length - 1 && (
                <div className="lg:hidden w-px h-8 bg-blush/40 mx-auto" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Note rassurante */}
        <motion.div
          className="mt-14 p-6 lg:p-8 bg-blush/20 rounded-2xl border border-blush/30 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-cormorant text-xl font-light text-warm-800 italic">
            "Vous n'avez pas besoin de tout comprendre avant de venir. Vous avez juste besoin
            d'un peu d'espace pour vous."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
