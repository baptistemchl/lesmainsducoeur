'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'
import { GiLotus } from 'react-icons/gi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter l'envoi d'email
    console.log('Message:', formData)
    alert('Votre message a été envoyé ! Je vous répondrai dans les plus brefs délais.')
    setFormData({ nom: '', email: '', telephone: '', message: '' })
  }

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
            <GiLotus className="w-16 h-16 text-gold-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif text-sage-800 mb-6">
              Me Contacter
            </h1>
            <p className="text-xl text-sage-600 leading-relaxed">
              Une question ? N'hésitez pas à me contacter, je vous répondrai avec plaisir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-serif text-sage-800 mb-8">
                  Envoyez-moi un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors"
                      placeholder="06 00 00 00 00"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-sage-600 text-cream-50 rounded-full hover:bg-sage-700 transition-all duration-300 hover:shadow-lg font-semibold text-lg"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Informations */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Coordonnées */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-serif text-sage-800 mb-8">
                  Coordonnées
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-sage-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Adresse</h3>
                      <p className="text-sage-600">
                        Rennes, Bretagne<br />
                        France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-sage-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Téléphone</h3>
                      <a href="tel:+33600000000" className="text-sage-600 hover:text-gold-600 transition-colors">
                        06 00 00 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-sage-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                      <a href="mailto:contact@lesmainsducoeur.fr" className="text-sage-600 hover:text-gold-600 transition-colors">
                        contact@lesmainsducoeur.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaInstagram className="text-sage-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Instagram</h3>
                      <a 
                        href="https://www.instagram.com/les_mainsducoeur" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sage-600 hover:text-gold-600 transition-colors"
                      >
                        @les_mainsducoeur
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-gradient-to-br from-sage-600 to-sage-700 rounded-3xl shadow-xl p-8 md:p-12 text-cream-50">
                <h2 className="text-3xl font-serif mb-6">
                  Horaires
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-semibold">9h - 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-semibold">9h - 13h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-semibold">Fermé</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-sage-500">
                  <p className="text-sm text-cream-200">
                    * Uniquement sur rendez-vous
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-sage-800 mb-12 text-center">
              Questions Fréquentes
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-serif text-xl text-sage-800 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sage-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const faqs = [
  {
    question: "Comment se déroule une première séance ?",
    answer: "Lors de la première séance, nous prenons le temps d'échanger sur vos besoins et vos attentes. Le soin dure ensuite environ 1 heure, pendant laquelle vous restez habillé et confortablement installé."
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer: "Le nombre de séances varie selon les personnes et les problématiques. Certains ressentent des bienfaits dès la première séance, d'autres auront besoin de plusieurs rendez-vous. Je vous accompagne au rythme qui vous convient."
  },
  {
    question: "Le magnétisme remplace-t-il un traitement médical ?",
    answer: "Non, le magnétisme est complémentaire à la médecine conventionnelle. Il ne remplace en aucun cas un diagnostic ou un traitement médical. N'arrêtez jamais un traitement sans l'avis de votre médecin."
  },
  {
    question: "Comment annuler ou reporter un rendez-vous ?",
    answer: "Vous pouvez annuler ou reporter gratuitement votre rendez-vous jusqu'à 24h avant l'heure prévue. Contactez-moi par téléphone ou email."
  }
]
