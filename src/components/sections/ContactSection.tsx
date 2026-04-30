import { motion } from "framer-motion"
import { Mail, Phone, Instagram, CheckCircle, Loader, MapPin } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { useContactForm } from "../../hooks/useContactForm"
import { services } from "../../data/services"
import { staggerContainer, fadeInUp, slideInLeft, glowReveal } from "../../lib/animations"

export function ContactSection() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="section-padding bg-ivory relative overflow-hidden">
      {/* Orbes décoratifs */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.25) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="section-container relative">
        <SectionHeading
          label="Premier échange"
          title="Commençons par nous parler"
          subtitle="Avant tout rendez-vous, j'aime prendre le temps d'un premier échange. Envoyez-moi un message, posez vos questions, partagez ce qui vous amène — on se rencontre, et on voit ensemble si je peux vous accompagner."
          centered
          className="mb-14"
        />

        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-16 items-start">
          {/* Infos de contact */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={slideInLeft} className="flex flex-col gap-1">
              <p className="font-cormorant text-2xl font-medium text-warm-900">Sarah</p>
              <p className="font-sans text-sm text-rose font-semibold">Praticienne en soins énergétiques</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "lesmainsducoeur22@gmail.com",
                  href: "mailto:lesmainsducoeur22@gmail.com",
                  color: "#D36969",
                },
                {
                  Icon: Phone,
                  label: "Téléphone",
                  value: "06 73 42 68 95",
                  href: "tel:+33673426895",
                  color: "#8B5CF6",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  value: "@les_mainsducoeur",
                  href: "https://www.instagram.com/les_mainsducoeur",
                  color: "#F59E0B",
                },
                {
                  Icon: MapPin,
                  label: "Cabinet",
                  value: "17 rue du Pré d'Aublé, 22400 Saint-Alban",
                  href: "https://www.google.com/maps/search/?api=1&query=17+rue+du+Pr%C3%A9+d%27Aubl%C3%A9+22400+Saint-Alban",
                  color: "#FB7185",
                },
              ].map(({ Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group hover:shadow-card"
                  style={{
                    background: "rgba(255, 255, 255, 0.35)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${color}18`,
                    }}
                  >
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-warm-500">{label}</p>
                    <p className="font-sans text-sm text-warm-800 group-hover:text-warm-900 transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-xl border border-blush/40"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="font-hand text-base text-warm-600 leading-snug">
                ✦ Réponse sous 48h — chaque message est lu avec attention et bienveillance.
              </p>
            </motion.div>
          </motion.div>

          {/* Formulaire — glow reveal */}
          <motion.div
            variants={glowReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-10 lg:p-12 flex flex-col items-center gap-4 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CheckCircle size={40} className="text-sage-deep" />
                </motion.div>
                <h3 className="font-cormorant text-3xl font-medium text-warm-900">
                  Message envoyé !
                </h3>
                <p className="font-sans text-warm-600 text-sm leading-relaxed max-w-sm">
                  Merci pour votre message. Sarah vous répondra avec soin dans les 48 heures.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="card p-7 lg:p-10 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-warm-600 font-semibold" htmlFor="name">
                      Prénom & Nom *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Marie Dupont"
                      value={values.name}
                      onChange={handleChange}
                      className={`font-sans text-sm text-warm-900 rounded-xl px-4 py-3 border outline-none transition-all duration-200 placeholder:text-warm-400 focus:ring-2 focus:ring-rose/25 focus:border-rose/40 ${errors.name ? "border-red-300" : "border-blush/50"}`}
                      style={{ background: "rgba(250,245,255,0.6)" }}
                    />
                    {errors.name && <p className="font-sans text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-warm-600 font-semibold" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="marie@exemple.fr"
                      value={values.email}
                      onChange={handleChange}
                      className={`font-sans text-sm text-warm-900 rounded-xl px-4 py-3 border outline-none transition-all duration-200 placeholder:text-warm-400 focus:ring-2 focus:ring-rose/25 focus:border-rose/40 ${errors.email ? "border-red-300" : "border-blush/50"}`}
                      style={{ background: "rgba(250,245,255,0.6)" }}
                    />
                    {errors.email && <p className="font-sans text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-warm-600 font-semibold" htmlFor="phone">
                      Téléphone (optionnel)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+33 6 00 00 00 00"
                      value={values.phone}
                      onChange={handleChange}
                      className="font-sans text-sm text-warm-900 rounded-xl px-4 py-3 border border-blush/50 outline-none transition-all duration-200 placeholder:text-warm-400 focus:ring-2 focus:ring-rose/25 focus:border-rose/40"
                      style={{ background: "rgba(250,245,255,0.6)" }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-warm-600 font-semibold" htmlFor="service">
                      Soin souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={handleChange}
                      className="font-sans text-sm text-warm-900 rounded-xl px-4 py-3 border border-blush/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-rose/25 focus:border-rose/40 appearance-none cursor-pointer"
                      style={{ background: "rgba(250,245,255,0.6)" }}
                    >
                      <option value="">Soin souhaité...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                      <option value="autre">Je ne sais pas encore</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs text-warm-600 font-semibold" htmlFor="message">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Partagez ce qui vous amène, vos questions, vos disponibilités..."
                    value={values.message}
                    onChange={handleChange}
                    className={`font-sans text-sm text-warm-900 rounded-xl px-4 py-3 border outline-none transition-all duration-200 placeholder:text-warm-400 focus:ring-2 focus:ring-rose/25 focus:border-rose/40 resize-none ${errors.message ? "border-red-300" : "border-blush/50"}`}
                    style={{ background: "rgba(250,245,255,0.6)" }}
                  />
                  {errors.message && <p className="font-sans text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary justify-center w-full sm:w-auto sm:self-start mt-1"
                >
                  {status === "sending" ? (
                    <>
                      <Loader size={15} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message"
                  )}
                </button>

                <p className="font-sans text-xs text-warm-400">
                  * Champs requis. Vos données restent confidentielles.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
