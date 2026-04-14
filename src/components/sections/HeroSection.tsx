import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { HeroComposition } from "../decorative/HeroComposition"
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "../../lib/animations"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-blush-gradient pt-24 pb-16">
      {/* Halos de fond */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F2D6D3 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-24 right-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4DDD0 0%, transparent 70%)" }}
      />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne texte */}
          <motion.div
            className="flex flex-col gap-7 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <Sparkles size={12} className="text-rose" />
              <span className="section-label">Soins énergétiques · Accompagnement intuitif</span>
            </motion.div>

            {/* Titre principal */}
            <motion.div variants={slideInLeft}>
              <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-warm-900 leading-[1.08] tracking-tight">
                Les Mains<br />
                <em className="not-italic text-gradient">du Coeur</em>
              </h1>
            </motion.div>

            {/* Phrase signature */}
            <motion.p
              variants={fadeInUp}
              className="font-cormorant text-xl lg:text-2xl text-warm-700 italic font-light leading-relaxed"
            >
              "Là où la lumière rencontre l'âme,<br />
              et où le corps retrouve sa douceur."
            </motion.p>

            {/* Corps */}
            <motion.p variants={fadeInUp} className="section-subtitle max-w-md">
              Portée par l'héritage de son père magnétiseur, Sarah Gueuné accompagne chaque
              personne avec une présence douce et une intuition sincère — pour retrouver
              équilibre, légèreté et ancrage intérieur.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Prendre rendez-vous
              </a>
              <a href="#soins" className="btn-ghost">
                Découvrir les soins
              </a>
            </motion.div>

            {/* Indicateurs */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5 pt-2">
              {[
                { value: "+ 200", label: "personnes accompagnées" },
                { value: "6", label: "soins proposés" },
                { value: "∞", label: "bienveillance" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-cormorant text-2xl font-medium text-rose-deep">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs text-warm-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Composition visuelle */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center lg:justify-end"
          >
            <HeroComposition />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-rose/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
