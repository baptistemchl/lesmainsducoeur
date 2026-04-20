import { motion } from "framer-motion"
import { Heart, Compass, Shield, Leaf, Star, Clock } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { waveStagger, floatUpRotate } from "../../lib/animations"

const differentiators = [
  {
    Icon: Heart,
    title: "Écoute sans jugement",
    text: "Chaque personne arrive avec son histoire unique. Sarah reçoit sans catégoriser, sans interpréter — juste avec une présence sincère et ouverte.",
    accent: "from-rose-light/50 to-blush/30",
    iconColor: "#D36969",
    iconBg: "rgba(211, 105, 105, 0.14)",
    iconBgHover: "rgba(211, 105, 105, 0.28)",
  },
  {
    Icon: Compass,
    title: "Approche intuitive",
    text: "Pas de protocole figé. Chaque séance s'adapte à ce que vous portez aujourd'hui, guidée par une sensibilité fine et une formation solide.",
    accent: "from-sage-light/50 to-sage-pale/30",
    iconColor: "#8B5CF6",
    iconBg: "rgba(139, 92, 246, 0.12)",
    iconBgHover: "rgba(139, 92, 246, 0.25)",
  },
  {
    Icon: Shield,
    title: "Cadre sécurisé",
    text: "La sécurité émotionnelle est une priorité. Vous pouvez arriver vulnérable — vous serez accueilli(e) avec douceur, toujours dans le respect.",
    accent: "from-gold-soft/50 to-gold-pale/30",
    iconColor: "#F59E0B",
    iconBg: "rgba(245, 158, 11, 0.12)",
    iconBgHover: "rgba(245, 158, 11, 0.25)",
  },
  {
    Icon: Leaf,
    title: "Héritage et transmission",
    text: "Une pratique enracinée dans un héritage familial vivant et dans une recherche personnelle constante — pas une mode, une vocation.",
    accent: "from-sage-light/50 to-sage-pale/30",
    iconColor: "#8B5CF6",
    iconBg: "rgba(139, 92, 246, 0.12)",
    iconBgHover: "rgba(139, 92, 246, 0.25)",
  },
  {
    Icon: Star,
    title: "Expérience sensible",
    text: "Chaque séance est pensée comme un moment à part entière — un espace de soin, de beauté intérieure et de retrouvailles avec soi.",
    accent: "from-rose-light/50 to-blush/30",
    iconColor: "#D36969",
    iconBg: "rgba(211, 105, 105, 0.14)",
    iconBgHover: "rgba(211, 105, 105, 0.28)",
  },
  {
    Icon: Clock,
    title: "Flexibilité & Distance",
    text: "Séances en présentiel et à distance, selon vos préférences. L'énergie ne connaît pas de frontières géographiques.",
    accent: "from-gold-soft/50 to-gold-pale/30",
    iconColor: "#F59E0B",
    iconBg: "rgba(245, 158, 11, 0.12)",
    iconBgHover: "rgba(245, 158, 11, 0.25)",
  },
]

export function WhyUsSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, #EDE9FE 0%, #FAF5FF 50%, #FDF2F8 100%)" }}>
      {/* Halo décoratif */}
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.42) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(196,181,253,0.3) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="section-container relative">
        <SectionHeading
          label="Pourquoi Les Mains du Coeur"
          title="Ce qui rend chaque séance unique"
          subtitle="Ce n'est pas seulement le soin qui fait la différence — c'est la façon dont on vous reçoit."
          centered
          className="mb-14"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={waveStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {differentiators.map(({ Icon, title, text, accent, iconColor, iconBg }) => (
            <motion.div
              key={title}
              variants={floatUpRotate}
              whileHover={{
                y: -8,
                rotate: 0,
                transition: { duration: 0.25, type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.98 }}
              className="relative flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 group overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              {/* Gradient de fond au hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div
                className="relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: iconBg }}
              >
                <Icon
                  size={19}
                  style={{ color: iconColor }}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="relative font-cormorant text-xl font-medium text-warm-900">{title}</h3>
              <p className="relative font-sans text-sm text-warm-600 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
