import { motion } from "framer-motion"
import { Heart, Compass, Shield, Leaf, Star, Clock } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { staggerContainer, scaleIn } from "../../lib/animations"

const differentiators = [
  {
    Icon: Heart,
    title: "Écoute sans jugement",
    text: "Chaque personne arrive avec son histoire unique. Sarah reçoit sans catégoriser, sans interpréter — juste avec une présence sincère et ouverte.",
    accent: "from-rose-light/50 to-blush/30",
    iconBg: "bg-rose-light/40 group-hover:bg-rose-light/70",
  },
  {
    Icon: Compass,
    title: "Approche intuitive",
    text: "Pas de protocole figé. Chaque séance s'adapte à ce que vous portez aujourd'hui, guidée par une sensibilité fine et une formation solide.",
    accent: "from-sage-light/50 to-sage-pale/30",
    iconBg: "bg-sage-light/50 group-hover:bg-sage-light/80",
  },
  {
    Icon: Shield,
    title: "Cadre sécurisé",
    text: "La sécurité émotionnelle est une priorité. Vous pouvez arriver vulnérable — vous serez accueilli(e) avec douceur, toujours dans le respect.",
    accent: "from-gold-soft/50 to-gold-pale/30",
    iconBg: "bg-gold-soft/50 group-hover:bg-gold-soft/80",
  },
  {
    Icon: Leaf,
    title: "Héritage et transmission",
    text: "Une pratique enracinée dans un héritage familial vivant et dans une recherche personnelle constante — pas une mode, une vocation.",
    accent: "from-sage-light/50 to-sage-pale/30",
    iconBg: "bg-sage-light/50 group-hover:bg-sage-light/80",
  },
  {
    Icon: Star,
    title: "Expérience sensible",
    text: "Chaque séance est pensée comme un moment à part entière — un espace de soin, de beauté intérieure et de retrouvailles avec soi.",
    accent: "from-rose-light/50 to-blush/30",
    iconBg: "bg-rose-light/40 group-hover:bg-rose-light/70",
  },
  {
    Icon: Clock,
    title: "Flexibilité & Distance",
    text: "Séances en présentiel et à distance, selon vos préférences. L'énergie ne connaît pas de frontières géographiques.",
    accent: "from-gold-soft/50 to-gold-pale/30",
    iconBg: "bg-gold-soft/50 group-hover:bg-gold-soft/80",
  },
]

export function WhyUsSection() {
  return (
    <section className="section-padding bg-sage-pale/40 relative overflow-hidden">
      {/* Halo décoratif */}
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3"
        style={{ background: "radial-gradient(circle, #F2D6D3 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {differentiators.map(({ Icon, title, text, accent, iconBg }) => (
            <motion.div
              key={title}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
              whileTap={{ scale: 0.98 }}
              className="relative flex flex-col gap-4 p-6 bg-white/80 rounded-2xl border border-sage-light/50 hover:border-rose/30 hover:bg-white hover:shadow-card-hover transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient de fond au hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className={`relative w-11 h-11 rounded-full ${iconBg} flex items-center justify-center transition-all duration-300`}>
                <Icon size={19} className="text-rose-deep group-hover:scale-110 transition-transform duration-300" />
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
