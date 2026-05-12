import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "../../lib/animations"

export function AyurvedaSection() {
  return (
    <section id="ayurveda" className="section-padding relative overflow-hidden bg-ivory">
      {/* Halos chauds */}
      <motion.div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.3) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="section-container relative">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Composition photos — 2 images empilées en collage */}
          <motion.div variants={slideInLeft} className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full">
            {/* Photo principale */}
            <motion.div
              className="absolute top-0 left-0 w-[70%] h-[65%] rounded-3xl overflow-hidden shadow-card z-10"
              style={{ border: "4px solid rgba(255, 255, 255, 0.7)" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            >
              <img
                src="/images/1000015277.webp"
                alt="Massage ayurvédique Abhyanga — soin du visage et de la tête"
                loading="lazy"
                width="1280"
                height="1280"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Photo secondaire */}
            <motion.div
              className="absolute bottom-0 right-0 w-[65%] h-[55%] rounded-3xl overflow-hidden shadow-card z-20"
              style={{ border: "4px solid rgba(255, 255, 255, 0.7)" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            >
              <img
                src="/images/1000015278.webp"
                alt="Massage ayurvédique Abhyanga — détente profonde du corps"
                loading="lazy"
                width="1280"
                height="1280"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Halo derrière les photos */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none blur-3xl -z-10"
              style={{ background: "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Symbole Om décoratif */}
            <motion.div
              className="absolute -bottom-4 -left-4 z-30 w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                boxShadow: "0 8px 30px rgba(245, 158, 11, 0.2)",
              }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-cormorant text-3xl text-rose-deep">ॐ</span>
            </motion.div>
          </motion.div>

          {/* Contenu texte */}
          <motion.div variants={slideInRight} className="flex flex-col gap-6">
            <motion.p variants={fadeInUp} className="section-label">
              La rencontre de deux univers
            </motion.p>

            <motion.h2 variants={fadeInUp} className="section-title">
              Le magnétisme et<br />
              <em className="not-italic text-rose font-medium">l'Ayurvéda</em>
            </motion.h2>

            <motion.p variants={fadeInUp} className="section-subtitle">
              L'Ayurvéda est pratiquée en Inde depuis plus de 5 000 ans. Son nom, composé
              des mots <em className="text-rose font-medium not-italic">« ayur »</em> et
              <em className="text-rose font-medium not-italic"> « veda »</em>, signifie
              <strong className="text-warm-900"> science de la vie</strong>. Une approche
              du soin qui prend en compte l'être dans son entièreté : corps, cœur, esprit.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-sans text-warm-700 leading-relaxed text-sm">
              C'est là, selon moi, que le pont entre l'Ayurvéda et le magnétisme se fait.
              Il y a dans l'Ayurvéda une forme de <em>« bon sens »</em> qui me parle
              profondément : une façon de vivre avec la nature et non contre, en respectant
              notre être, les rythmes, les saisons, notre nature profonde, notre Dharma.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-sans text-warm-700 leading-relaxed text-sm">
              Dans ma pratique du magnétisme, j'ai ressenti l'envie de faire autrement, de
              passer aussi par le toucher. Parce que parfois, certaines personnes ont besoin
              de quelque chose de plus enveloppant, de plus doux, de plus cocon. C'est ce
              qui m'a amenée à me former au <strong className="font-semibold text-warm-900">massage Abhyanga</strong>.
            </motion.p>

            {/* Mini cartes — les 3 dimensions */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3 mt-2">
              {[
                { label: "Corps", icon: "✦" },
                { label: "Cœur", icon: "❋" },
                { label: "Esprit", icon: "◈" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 px-3 py-4 rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(245, 158, 11, 0.15)",
                  }}
                >
                  <span className="text-xl text-rose-deep/70">{item.icon}</span>
                  <span className="font-cormorant text-lg text-warm-800">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Citation finale */}
            <motion.blockquote
              variants={fadeInUp}
              className="pl-5 mt-2"
              style={{ borderLeft: "3px solid #F59E0B" }}
            >
              <p className="font-hand text-xl text-warm-700 leading-relaxed">
                "Vivre avec la nature, et non contre — voilà ce qui me touche."
              </p>
            </motion.blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
