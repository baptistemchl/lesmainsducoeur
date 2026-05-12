import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations"

export function AboutSection() {
  return (
    <section id="a-propos" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait Sarah — encadré doux avec halos */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-72 lg:w-[360px]">
              {/* Halos derrière l'image */}
              <motion.div
                className="absolute -top-10 -left-10 w-60 h-60 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(239,184,184,0.45) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(196,181,253,0.3) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />

              {/* Portrait */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-card aspect-[3/4]"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                }}
              >
                <img
                  src="/images/Screenshot_20260210_213325_Gallery.webp"
                  alt="Sarah, praticienne en soins énergétiques"
                  loading="lazy"
                  width="800"
                  height="1067"
                  className="w-full h-full object-cover"
                />
                {/* Voile doux pour ancrer le texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Carte signature en bas */}
                <div
                  className="absolute bottom-4 left-4 right-4 px-5 py-3 rounded-2xl flex flex-col gap-0.5"
                  style={{
                    background: "rgba(255, 255, 255, 0.75)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <h3 className="font-cormorant text-2xl font-light text-warm-900 leading-none">
                    Sarah
                  </h3>
                  <p className="font-sans text-[10px] text-rose font-semibold tracking-widest uppercase">
                    Praticienne en soins énergétiques
                  </p>
                </div>
              </div>

              {/* Mini citation manuscrite — sous le portrait */}
              <p className="relative font-hand text-lg text-warm-600 text-center leading-snug mt-6">
                "L'énergie ne ment pas,<br />elle se ressent."
              </p>
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
              Qui suis-je ?
            </motion.p>

            <motion.h2 variants={fadeInUp} className="section-title">
              Bercée par le magnétisme,<br />
              <em className="not-italic text-rose font-medium">guidée par le cœur</em>
            </motion.h2>

            <motion.p variants={fadeInUp} className="section-subtitle">
              Je m'appelle Sarah. J'ai été bercée par le magnétisme, l'énergie et le subtil
              grâce à mon papa. Je l'ai vu écouter, soulager, apaiser. Il m'a transmis ses
              valeurs, ses convictions, (un peu) de son savoir-faire, mais surtout, beaucoup
              d'amour et cette façon de faire tout ça avec le cœur.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-sans text-warm-700 leading-relaxed text-sm">
              Petite, je posais déjà les mains, sans vraiment savoir, sur mon papa et mes
              nombreux animaux — c'était instinctif, simple, comme une évidence. Puis la vie
              m'a amenée à traverser sa perte. Un moment difficile, mais aussi un tournant.
              C'est là que tout a pris encore plus de sens, comme une continuité, une
              transmission.
            </motion.p>

            <motion.p variants={fadeInUp} className="font-sans text-warm-700 leading-relaxed text-sm">
              J'ai donc créé <strong className="font-semibold text-warm-900">Les Mains du Cœur</strong>,
              simplement pour continuer à donner, à ma manière, ce que lui m'avait transmis.
              Aujourd'hui, j'ai à cœur d'offrir un espace simple et bienveillant — une vraie
              bulle de douceur, où chacun peut se déposer, se reconnecter à soi, retrouver un
              peu plus de lumière.
            </motion.p>

            {/* Citation */}
            <motion.blockquote
              variants={fadeInUp}
              className="pl-5 mt-2"
              style={{ borderLeft: "3px solid #D36969" }}
            >
              <p className="font-cormorant text-xl italic font-light text-warm-800 leading-relaxed">
                "Une parenthèse de sérénité dans votre quotidien."
              </p>
              <footer className="font-hand text-base mt-2 text-rose">— Sarah</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
