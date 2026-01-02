'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { GiLotus } from 'react-icons/gi'

export default function TemoignagesPage() {
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
              Témoignages
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed">
              Découvrez les expériences de celles et ceux qui ont fait confiance aux Mains du Cœur
            </p>
          </motion.div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FaQuoteLeft className="text-4xl text-gold-400/30 mb-4" />
                
                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-gold-500" />
                  ))}
                </div>

                {/* Témoignage */}
                <p className="text-sage-600 leading-relaxed mb-6 italic">
                  "{temoignage.texte}"
                </p>

                {/* Auteur */}
                <div className="pt-4 border-t border-sage-100">
                  <p className="font-semibold text-sage-800">
                    {temoignage.prenom}
                  </p>
                  <p className="text-sm text-sage-500">
                    {temoignage.soin}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-sage-700 text-cream-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-serif font-bold text-gold-400 mb-3">
                  {stat.nombre}
                </div>
                <div className="text-xl text-cream-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-sage-800 mb-6">
              Prêt à vivre votre propre expérience ?
            </h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les nombreuses personnes qui ont retrouvé équilibre et bien-être.
            </p>
            <a
              href="/rendez-vous"
              className="inline-block px-10 py-5 bg-gold-500 text-sage-900 rounded-full hover:bg-gold-600 transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold text-lg"
            >
              Prendre rendez-vous
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const temoignages = [
  {
    prenom: "Sophie",
    soin: "Magnétisme Général",
    texte: "Une expérience incroyable. J'avais des douleurs chroniques au dos depuis des années. Après 3 séances, je me sens tellement mieux ! L'accueil est chaleureux et bienveillant."
  },
  {
    prenom: "Marc",
    soin: "Harmonisation des Chakras",
    texte: "Je ne croyais pas trop au magnétisme avant de rencontrer Les Mains du Cœur. Maintenant je suis convaincu. Je me sens plus serein, plus ancré. Merci infiniment."
  },
  {
    prenom: "Julie",
    soin: "Soin pour Enfant",
    texte: "Ma fille de 7 ans faisait des cauchemars toutes les nuits. Après une séance, elle dort paisiblement. C'est magique ! Et elle a adoré le moment passé ici."
  },
  {
    prenom: "Thomas",
    soin: "Soin à Distance",
    texte: "Même à distance, le soin est puissant. J'étais sceptique mais j'ai vraiment senti l'énergie circuler. Je recommande vivement pour ceux qui ne peuvent pas se déplacer."
  },
  {
    prenom: "Émilie",
    soin: "Magnétisme Général",
    texte: "Un moment de pure détente. J'avais beaucoup de stress accumulé, je me sentais épuisée. Aujourd'hui je me sens régénérée, pleine d'énergie positive."
  },
  {
    prenom: "Laurent",
    soin: "Harmonisation des Chakras",
    texte: "Professionnel, à l'écoute et vraiment doué. J'ai ressenti les bienfaits dès la première séance. C'est devenu mon rendez-vous bien-être mensuel indispensable."
  },
  {
    prenom: "Isabelle",
    soin: "Soin Animalier",
    texte: "Mon chien était très anxieux depuis notre déménagement. Après le soin, il est redevenu calme et détendu. Merci d'avoir aussi pensé à nos animaux !"
  },
  {
    prenom: "Pierre",
    soin: "Magnétisme Général",
    texte: "J'avais des migraines chroniques qui me gâchaient la vie. Grâce aux séances, leur fréquence a considérablement diminué. Je revis littéralement."
  },
  {
    prenom: "Céline",
    soin: "Soin à Distance",
    texte: "Enceinte de 7 mois, je ne pouvais pas me déplacer facilement. Le soin à distance m'a apporté tellement de sérénité. Bébé aussi a apprécié, il bougeait différemment après !"
  }
]

const stats = [
  {
    nombre: "500+",
    label: "Personnes accompagnées"
  },
  {
    nombre: "98%",
    label: "De satisfaction"
  },
  {
    nombre: "5 ans",
    label: "D'expérience"
  }
]
