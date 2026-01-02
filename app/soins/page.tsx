'use client'

import { motion } from 'framer-motion'
import { FaHands, FaChild, FaDog, FaLeaf } from 'react-icons/fa'
import { GiHealing, GiLotus } from 'react-icons/gi'
import Link from 'next/link'

export default function SoinsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sage-50 via-cream-50 to-sage-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GiLotus className="w-16 h-16 text-gold-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif text-sage-800 mb-6">
              Mes Soins Énergétiques
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed">
              Découvrez les différents types de soins que je propose pour vous accompagner 
              sur le chemin du bien-être et de l'harmonisation énergétique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Soins Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-5xl mx-auto">
            {soins.map((soin, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-sage-100 to-sage-200 p-12 flex items-center justify-center">
                    <div className="text-7xl text-sage-600">
                      {soin.icon}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-10">
                    <h3 className="text-3xl font-serif text-sage-800 mb-4">
                      {soin.title}
                    </h3>
                    <p className="text-sage-600 leading-relaxed mb-6">
                      {soin.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-sage-700 text-lg">Bénéfices :</h4>
                      <ul className="space-y-2">
                        {soin.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sage-600">
                            <span className="text-gold-500 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-baseline gap-4 pt-4 border-t border-sage-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-serif text-sage-800 font-semibold">
                          {soin.price}€
                        </span>
                        <span className="text-sage-500">/ {soin.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-20 bg-sage-700 text-cream-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-12">
              Informations Pratiques
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sage-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-serif mb-4 text-gold-400">
                  Déroulement d'une séance
                </h3>
                <ul className="space-y-3 text-cream-200">
                  <li>• Accueil et échange sur vos besoins</li>
                  <li>• Installation confortable (habillé)</li>
                  <li>• Soin énergétique personnalisé</li>
                  <li>• Temps de repos et d'intégration</li>
                  <li>• Partage et conseils post-séance</li>
                </ul>
              </div>
              <div className="bg-sage-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-serif mb-4 text-gold-400">
                  À savoir
                </h3>
                <ul className="space-y-3 text-cream-200">
                  <li>• Les soins sont complémentaires à la médecine</li>
                  <li>• Aucune manipulation physique</li>
                  <li>• Tenue confortable recommandée</li>
                  <li>• Paiement : espèces ou virement</li>
                  <li>• Annulation gratuite 24h avant</li>
                </ul>
              </div>
            </div>
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
              Prêt à réserver votre séance ?
            </h2>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              Choisissez le soin qui vous correspond et prenez rendez-vous en ligne.
            </p>
            <Link
              href="/rendez-vous"
              className="inline-block px-10 py-5 bg-gold-500 text-sage-900 rounded-full hover:bg-gold-600 transition-all duration-300 hover:shadow-xl hover:scale-105 font-semibold text-lg"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const soins = [
  {
    icon: <FaHands />,
    title: "Magnétisme Général",
    description: "Soin énergétique complet pour rééquilibrer votre corps et votre esprit. Je travaille sur vos centres énergétiques pour libérer les blocages et stimuler votre capacité naturelle d'auto-guérison.",
    benefits: [
      "Soulagement des douleurs physiques",
      "Réduction du stress et de l'anxiété",
      "Amélioration du sommeil",
      "Renforcement du système immunitaire"
    ],
    price: 60,
    duration: "1h"
  },
  {
    icon: <GiHealing />,
    title: "Harmonisation des Chakras",
    description: "Travail approfondi sur vos 7 centres énergétiques principaux. Ce soin permet de rétablir la circulation harmonieuse de l'énergie vitale dans tout votre corps.",
    benefits: [
      "Équilibre émotionnel et mental",
      "Clarté d'esprit et intuition renforcée",
      "Libération des émotions bloquées",
      "Meilleure connexion corps-esprit"
    ],
    price: 70,
    duration: "1h15"
  },
  {
    icon: <FaChild />,
    title: "Soins pour Enfants",
    description: "Accompagnement doux et adapté aux plus jeunes. Aide pour les troubles du sommeil, l'anxiété scolaire, les maux de ventre récurrents ou simplement pour renforcer leur équilibre.",
    benefits: [
      "Apaisement et détente",
      "Réduction des peurs et angoisses",
      "Amélioration de la concentration",
      "Renforcement de la confiance en soi"
    ],
    price: 40,
    duration: "30-45min"
  },
  {
    icon: <FaDog />,
    title: "Soins Animaliers",
    description: "Nos compagnons à quatre pattes sont également sensibles aux énergies. Je propose des soins adaptés pour les aider en cas de stress, douleurs ou troubles comportementaux.",
    benefits: [
      "Apaisement du stress et de l'anxiété",
      "Soutien dans les périodes de changement",
      "Aide à la récupération post-opératoire",
      "Amélioration du comportement"
    ],
    price: 50,
    duration: "45min"
  },
  {
    icon: <FaLeaf />,
    title: "Soin à Distance",
    description: "L'énergie n'a pas de frontières. Si vous ne pouvez pas vous déplacer, je peux réaliser votre soin à distance avec la même efficacité. Nous convenons ensemble d'un créneau.",
    benefits: [
      "Accessible où que vous soyez",
      "Confort de votre domicile",
      "Aussi efficace qu'en présentiel",
      "Suivi par téléphone ou vidéo"
    ],
    price: 55,
    duration: "1h"
  }
]
