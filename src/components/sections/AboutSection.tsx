import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, slideInLeft, popIn } from "../../lib/animations"

export function AboutSection() {
  return (
    <section id="a-propos" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visuel portrait stylisé */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-72 lg:w-[380px] lg:h-[380px] flex-shrink-0">
              {/* Fond halo animé */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blush/60 via-rose-muted/30 to-sage-light/40 blur-2xl scale-110"
                animate={{ scale: [1.1, 1.2, 1.1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Cercle principal */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-rose-light/50 shadow-soft"
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 200 } }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blush/50 via-cream to-sage-pale/60 flex items-center justify-center">
                  <svg
                    viewBox="0 0 300 300"
                    className="w-48 h-48 opacity-50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="150" cy="105" r="42" fill="#C9948A" fillOpacity="0.35" />
                    <path
                      d="M82 240 C82 195 110 172 150 172 C190 172 218 195 218 240"
                      fill="#C9948A"
                      fillOpacity="0.25"
                    />
                    <path d="M150 155 Q160 175 155 195" stroke="#A8B5A2" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
                    <path d="M155 185 Q170 178 178 165" stroke="#A8B5A2" strokeWidth="1" fill="none" strokeOpacity="0.4" />
                    <path d="M155 190 Q140 182 133 170" stroke="#A8B5A2" strokeWidth="1" fill="none" strokeOpacity="0.4" />
                  </svg>
                </div>
              </motion.div>

              {/* Badge flottant */}
              <motion.div
                variants={popIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card-hover px-4 py-3 border border-rose-light/40"
              >
                <p className="font-cormorant text-sm font-medium text-warm-900">Sarah Gueuné</p>
                <p className="font-sans text-xs text-rose-deep">Praticienne en soins énergétiques</p>
              </motion.div>
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
              <em className="not-italic text-gradient">hérité et sincère</em>
            </motion.h2>

            <motion.p variants={fadeInUp} className="section-subtitle">
              Portée depuis toujours par la magie des mains et de l'énergie — un héritage précieux
              reçu de son père magnétiseur — Sarah marche aujourd'hui sur son propre chemin, avec
              humilité et profonde conviction.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-sans text-warm-700 leading-relaxed text-sm">
              Avec <strong className="font-medium text-warm-900">Les Mains du Coeur</strong>, elle
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
              className="border-l-3 border-rose-deep/50 pl-5 mt-2"
              style={{ borderLeftWidth: "3px" }}
            >
              <p className="font-cormorant text-xl italic font-light text-warm-800 leading-relaxed">
                "J'offre des instants de lumière et de douceur, où l'âme et le corps se rencontrent."
              </p>
              <footer className="font-sans text-xs text-rose-deep mt-2">— Sarah Gueuné</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
