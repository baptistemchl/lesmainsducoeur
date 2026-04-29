import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { HeroComposition } from "../decorative/HeroComposition"
import { staggerContainer, fadeInUp, slideInLeft, slideInRight, popIn } from "../../lib/animations"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-yoga pt-24 pb-16">
      {/* Halos de fond animés — fuchsia, violet, doré */}
      <motion.div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.5) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(196,181,253,0.4) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Halo accent fuchsia */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(211,105,105,0.22) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Halo doré subtil */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
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
              <motion.span
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={14} className="text-rose-vibrant" />
              </motion.span>
              <span className="section-label">Soins énergétiques · Accompagnement intuitif</span>
            </motion.div>

            {/* Titre principal */}
            <motion.div variants={slideInLeft}>
              <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-warm-900 leading-[1.08] tracking-tight">
                Les Mains<br />
                <em className="not-italic text-rose font-medium">du Coeur</em>
              </h1>
            </motion.div>

            {/* Phrase signature — manuscrite */}
            <motion.p
              variants={fadeInUp}
              className="font-hand text-2xl lg:text-3xl text-warm-700 leading-snug"
            >
              "Là où la lumière rencontre l'âme,<br />
              et où le corps retrouve sa douceur."
            </motion.p>

            {/* Corps */}
            <motion.p variants={fadeInUp} className="section-subtitle max-w-md">
              Portée par l'héritage de son père magnétiseur, Sarah accompagne chaque
              personne avec une présence douce et une intuition sincère — pour retrouver
              équilibre, légèreté et ancrage intérieur.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Prendre rendez-vous
              </motion.a>
              <motion.a
                href="#soins"
                className="btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Découvrir les soins
              </motion.a>
            </motion.div>

            {/* Indicateurs — glass panel */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 pt-2 px-5 py-4 rounded-2xl w-fit"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              {[
                { value: "+ 200", label: "personnes accompagnées" },
                { value: "4", label: "soins proposés" },
                { value: "∞", label: "bienveillance" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col"
                  variants={popIn}
                  custom={i}
                >
                  <span className="font-cormorant text-3xl font-semibold text-rose-deep">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs text-warm-500">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Composition visuelle — mandala/lotus */}
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-rose/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
