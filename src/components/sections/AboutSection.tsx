import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations"

export function AboutSection() {
  return (
    <section id="a-propos" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Panneau zen — présentation Sarah */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="relative w-72 lg:w-[340px] rounded-3xl overflow-hidden shadow-card p-8 lg:p-10 flex flex-col items-center gap-6"
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              {/* Halo subtil derrière le panneau */}
              <motion.div
                className="absolute -top-20 -left-20 w-60 h-60 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(239,184,184,0.38) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(196,181,253,0.25) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />

              {/* Mandala lotus miniature */}
              <motion.div
                className="relative w-32 h-32"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
                  {/* Pétales externes */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <ellipse
                      key={angle}
                      cx="100"
                      cy="42"
                      rx="10"
                      ry="30"
                      fill="#D36969"
                      fillOpacity="0.12"
                      transform={`rotate(${angle} 100 100)`}
                    />
                  ))}
                  {/* Pétales internes */}
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <ellipse
                      key={`inner-${angle}`}
                      cx="100"
                      cy="58"
                      rx="8"
                      ry="22"
                      fill="#8B5CF6"
                      fillOpacity="0.1"
                      transform={`rotate(${angle} 100 100)`}
                    />
                  ))}
                  {/* Centre */}
                  <circle cx="100" cy="100" r="16" fill="#D36969" fillOpacity="0.08" />
                  <circle cx="100" cy="100" r="8" fill="#D36969" fillOpacity="0.15" />
                  {/* Anneau */}
                  <circle cx="100" cy="100" r="70" stroke="#D36969" strokeWidth="0.5" strokeOpacity="0.15" fill="none" strokeDasharray="3 6" />
                </svg>
              </motion.div>

              {/* Identité */}
              <div className="relative flex flex-col items-center gap-1 text-center">
                <h3 className="font-cormorant text-3xl font-light text-warm-900 tracking-wide">
                  Sarah Gueuné
                </h3>
                <div className="w-10 h-px bg-rose/30 my-2" />
                <p className="font-sans text-xs text-rose font-semibold tracking-widest uppercase">
                  Praticienne en soins énergétiques
                </p>
              </div>

              {/* Mini citation — manuscrite */}
              <p className="relative font-hand text-lg text-warm-600 text-center leading-snug">
                "L'énergie ne ment pas,<br />elle se ressent."
              </p>

              {/* Points d'expertise */}
              <div className="relative flex flex-wrap justify-center gap-2">
                {["Magnétisme", "Lahochi", "Guidance"].map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-[10px] font-semibold tracking-wider uppercase text-warm-500 px-3 py-1.5 rounded-full border border-rose-muted/30 bg-white/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={fadeInUp} className="section-label">
              À propos
            </motion.p>

            <motion.h2 variants={fadeInUp} className="section-title">
              Un chemin de lumière<br />
              <em className="not-italic text-rose font-medium">hérité et sincère</em>
            </motion.h2>

            <motion.p variants={fadeInUp} className="section-subtitle">
              Portée depuis toujours par la magie des mains et de l'énergie — un héritage précieux
              reçu de son père magnétiseur — Sarah marche aujourd'hui sur son propre chemin, avec
              humilité et profonde conviction.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-sans text-warm-700 leading-relaxed text-sm">
              Avec <strong className="font-semibold text-warm-900">Les Mains du Coeur</strong>, elle
              offre des instants de lumière et de douceur, des espaces où l'âme et le corps se
              rencontrent, loin de l'agitation du monde. Chaque séance est unique, chaque personne
              est accueillie dans sa singularité, sans jugement et sans protocole figé.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-sans text-warm-700 leading-relaxed text-sm">
              Sa pratique s'enracine dans une approche intuitive, douce et contemporaine du soin
              énergétique — loin des clichés, ancrée dans le réel, ouverte à toutes et à tous.
              Ce qui guide Sarah avant tout : la sincérité du lien et l'intention de bien.
            </motion.p>

            {/* Citation */}
            <motion.blockquote
              variants={fadeInUp}
              className="pl-5 mt-2"
              style={{ borderLeft: "3px solid #D36969" }}
            >
              <p className="font-cormorant text-xl italic font-light text-warm-800 leading-relaxed">
                "J'offre des instants de lumière et de douceur, où l'âme et le corps se rencontrent."
              </p>
              <footer className="font-hand text-base mt-2 text-rose">— Sarah</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
