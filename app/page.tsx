'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaHands, FaHeart, FaSpa, FaCalendarAlt } from 'react-icons/fa'
import { GiLotus, GiHealing } from 'react-icons/gi'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage-50 via-cream-50 to-sage-100">
        {/* Particules d'énergie décoratives */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gold-400/20 energy-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo/Icône */}
            <motion.div
              className="mb-8 inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <GiLotus className="w-20 h-20 text-gold-500 mx-auto animate-float" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-6 text-sage-800 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Les Mains du Cœur
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-sage-600 mb-4 font-light italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Magnétiseur et Soins Énergétiques
            </motion.p>

            <motion.p
              className="text-lg text-sage-700 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Retrouvez votre équilibre intérieur et libérez votre énergie vitale. 
              Un accompagnement bienveillant pour votre bien-être physique et émotionnel.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Link
                href="/rendez-vous"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sage-600 text-cream-50 rounded-full hover:bg-sage-700 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium"
              >
                <FaCalendarAlt />
                Prendre rendez-vous
              </Link>
              <Link
                href="/soins"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-sage-600 text-sage-700 rounded-full hover:bg-sage-50 transition-all duration-300 hover:scale-105 font-medium"
              >
                <GiHealing />
                Découvrir les soins
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-sage-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-sage-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Section Bienfaits */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-4">
              Les bienfaits du magnétisme
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-cream-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-sage-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-gold-500 mb-4 text-4xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif text-sage-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Citation */}
      <section className="py-24 bg-gradient-to-br from-sage-700 to-sage-800 text-cream-50">
        <div className="container mx-auto px-6">
          <motion.blockquote
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <GiLotus className="w-12 h-12 mx-auto mb-6 text-gold-400" />
            <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">
              « L'énergie suit la pensée. En harmonisant votre corps et votre esprit, 
              vous libérez votre potentiel de guérison naturel. »
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-sage-800 mb-6">
              Prêt à commencer votre chemin vers le bien-être ?
            </h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous dès maintenant et laissez l'énergie circuler librement.
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gold-500 text-sage-900 rounded-full hover:bg-gold-600 transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold text-lg"
            >
              <FaCalendarAlt />
              Réserver ma séance
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

const benefits = [
  {
    icon: <FaHeart />,
    title: "Équilibre émotionnel",
    description: "Libérez vos blocages émotionnels et retrouvez la paix intérieure."
  },
  {
    icon: <GiHealing />,
    title: "Soulagement physique",
    description: "Atténuez les douleurs et tensions accumulées dans le corps."
  },
  {
    icon: <FaSpa />,
    title: "Relaxation profonde",
    description: "Évacuez le stress et retrouvez un état de détente totale."
  },
  {
    icon: <FaHands />,
    title: "Harmonisation énergétique",
    description: "Rééquilibrez vos centres énergétiques pour un mieux-être global."
  },
  {
    icon: <GiLotus />,
    title: "Vitalité retrouvée",
    description: "Stimulez votre énergie vitale et renforcez votre système immunitaire."
  },
  {
    icon: <FaHeart />,
    title: "Connexion corps-esprit",
    description: "Reconnectez-vous à vous-même et développez votre conscience."
  }
]
