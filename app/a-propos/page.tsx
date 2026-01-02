'use client'

import { motion } from 'framer-motion'
import { GiLotus } from 'react-icons/gi'
import { FaHeart, FaHandHoldingHeart } from 'react-icons/fa'

export default function AProposPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-sage-50 via-cream-50 to-sage-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GiLotus className="w-16 h-16 text-gold-500 mx-auto mb-6 animate-float" />
            <h1 className="text-5xl md:text-6xl font-serif text-sage-800 mb-6">
              À Propos
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed">
              Découvrez mon parcours et ma vision du magnétisme
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gradient-to-br from-sage-200 to-gold-200 rounded-3xl shadow-xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-serif text-sage-800 mb-6">
                  Mon Parcours
                </h2>
                <div className="space-y-4 text-sage-600 leading-relaxed">
                  <p>
                    Passionnée par les énergies et le bien-être depuis toujours, j'ai découvert 
                    mon don de magnétisme il y a plusieurs années. Ce qui était au départ une 
                    intuition s'est transformé en une véritable vocation.
                  </p>
                  <p>
                    Après une formation approfondie et des années de pratique, j'ai décidé de 
                    mettre mes capacités au service des autres. Chaque séance est pour moi un 
                    moment privilégié de connexion et de partage.
                  </p>
                  <p>
                    Mon approche est holistique : je considère chaque personne dans sa globalité, 
                    en prenant en compte son corps, son esprit et ses émotions.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Valeurs */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-sage-800 mb-4">
                Mes Valeurs
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {valeurs.map((valeur, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl text-gold-500 mb-4 flex justify-center">
                    {valeur.icon}
                  </div>
                  <h3 className="text-xl font-serif text-sage-800 mb-3">
                    {valeur.title}
                  </h3>
                  <p className="text-sage-600">
                    {valeur.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-20 bg-sage-700 text-cream-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <FaHeart className="w-12 h-12 mx-auto mb-6 text-gold-400" />
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
              « Mon objectif est simple : vous aider à retrouver votre équilibre naturel 
              et à libérer votre potentiel de guérison. Chaque personne porte en elle 
              cette capacité extraordinaire. »
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-sage-800 mb-8 text-center">
                Mon Engagement
              </h2>
              <div className="space-y-6 text-sage-600 leading-relaxed">
                <p>
                  <strong className="text-sage-800">Éthique et respect :</strong> Je pratique 
                  dans le respect absolu de chaque personne, de ses croyances et de son intimité. 
                  Le magnétisme est un complément aux traitements médicaux, jamais un substitut.
                </p>
                <p>
                  <strong className="text-sage-800">Confidentialité :</strong> Tout ce qui est 
                  partagé lors de nos séances reste strictement confidentiel.
                </p>
                <p>
                  <strong className="text-sage-800">Formation continue :</strong> Je continue 
                  régulièrement à me former et à échanger avec d'autres praticiens pour enrichir 
                  ma pratique et vous offrir le meilleur accompagnement possible.
                </p>
                <p>
                  <strong className="text-sage-800">Accessibilité :</strong> J'adapte mes tarifs 
                  et propose des soins à distance pour rendre ces bienfaits accessibles au plus 
                  grand nombre.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const valeurs = [
  {
    icon: <FaHeart />,
    title: "Bienveillance",
    description: "Un accompagnement empathique et sans jugement, dans le respect de votre parcours unique."
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Authenticité",
    description: "Une pratique sincère et transparente, guidée par l'intention du cœur."
  },
  {
    icon: <GiLotus />,
    title: "Harmonie",
    description: "La recherche constante de l'équilibre entre corps, esprit et émotions."
  }
]
