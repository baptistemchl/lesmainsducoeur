'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa'
import { GiLotus } from 'react-icons/gi'

export default function RendezVousPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    soin: '',
    date: '',
    time: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  })

  const soins = [
    { id: 'magnetisme', label: 'Magnétisme Général', duration: '1h', price: 60 },
    { id: 'chakras', label: 'Harmonisation des Chakras', duration: '1h15', price: 70 },
    { id: 'enfant', label: 'Soin pour Enfant', duration: '45min', price: 40 },
    { id: 'animal', label: 'Soin Animalier', duration: '45min', price: 50 },
    { id: 'distance', label: 'Soin à Distance', duration: '1h', price: 55 }
  ]

  const creneaux = [
    '09:00', '10:30', '14:00', '15:30', '17:00'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Intégrer avec Google Calendar API et envoi email
    console.log('Réservation:', formData)
    alert('Votre demande de rendez-vous a été envoyée ! Je vous confirmerai par email dans les plus brefs délais.')
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-sage-50 via-cream-50 to-cream-100">
      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <GiLotus className="w-16 h-16 text-gold-500 mx-auto mb-6" />
          <h1 className="text-5xl font-serif text-sage-800 mb-4">
            Prendre Rendez-vous
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Choisissez votre soin et le créneau qui vous convient
          </p>
        </div>
      </section>

      {/* Formulaire de réservation */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Indicateur d'étapes */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      step >= s ? 'bg-sage-600 text-cream-50' : 'bg-sage-200 text-sage-600'
                    }`}>
                      {s}
                    </div>
                    {s < 3 && (
                      <div className={`w-16 h-1 mx-2 transition-colors ${
                        step > s ? 'bg-sage-600' : 'bg-sage-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Étape 1: Choix du soin */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-serif text-sage-800 mb-8 text-center">
                    Choisissez votre soin
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {soins.map((soin) => (
                      <button
                        key={soin.id}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, soin: soin.id })
                          setStep(2)
                        }}
                        className={`p-6 rounded-2xl border-2 transition-all text-left hover:shadow-lg ${
                          formData.soin === soin.id
                            ? 'border-sage-600 bg-sage-50'
                            : 'border-sage-200 hover:border-sage-400'
                        }`}
                      >
                        <h3 className="font-serif text-xl text-sage-800 mb-2">
                          {soin.label}
                        </h3>
                        <div className="flex justify-between items-end text-sage-600">
                          <span className="text-sm">{soin.duration}</span>
                          <span className="text-2xl font-semibold text-gold-600">
                            {soin.price}€
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Étape 2: Choix date et heure */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-serif text-sage-800 mb-2">
                      Choisissez votre créneau
                    </h2>
                    <p className="text-sage-600">
                      Soin sélectionné: <span className="font-semibold">
                        {soins.find(s => s.id === formData.soin)?.label}
                      </span>
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sage-700 font-medium mb-2 flex items-center gap-2">
                        <FaCalendarAlt className="text-gold-500" />
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sage-700 font-medium mb-2 flex items-center gap-2">
                        <FaClock className="text-gold-500" />
                        Heure
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {creneaux.map((creneau) => (
                          <button
                            key={creneau}
                            type="button"
                            onClick={() => setFormData({ ...formData, time: creneau })}
                            className={`p-3 rounded-xl border-2 transition-all font-medium ${
                              formData.time === creneau
                                ? 'border-sage-600 bg-sage-600 text-cream-50'
                                : 'border-sage-200 hover:border-sage-400'
                            }`}
                          >
                            {creneau}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 px-6 py-3 border-2 border-sage-600 text-sage-700 rounded-full hover:bg-sage-50 transition-colors font-medium"
                    >
                      Retour
                    </button>
                    <button
                      type="button"
                      onClick={() => formData.date && formData.time && setStep(3)}
                      disabled={!formData.date || !formData.time}
                      className="flex-1 px-6 py-3 bg-sage-600 text-cream-50 rounded-full hover:bg-sage-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              )}

              {/* Étape 3: Informations personnelles */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-serif text-sage-800 mb-8 text-center">
                    Vos coordonnées
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sage-700 font-medium mb-2 flex items-center gap-2">
                        <FaUser className="text-gold-500" />
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sage-700 font-medium mb-2 flex items-center gap-2">
                        <FaUser className="text-gold-500" />
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sage-700 font-medium mb-2 flex items-center gap-2">
                      <FaEnvelope className="text-gold-500" />
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-700 font-medium mb-2 flex items-center gap-2">
                      <FaPhone className="text-gold-500" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisions sur votre demande..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-sage-200 focus:border-sage-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 px-6 py-3 border-2 border-sage-600 text-sage-700 rounded-full hover:bg-sage-50 transition-colors font-medium"
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gold-500 text-sage-900 rounded-full hover:bg-gold-600 transition-colors font-semibold text-lg hover:shadow-lg"
                    >
                      Confirmer le rendez-vous
                    </button>
                  </div>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}
