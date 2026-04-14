import { motion } from "framer-motion"
import { Mail, Phone, Instagram, CheckCircle, Loader } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { useContactForm } from "../../hooks/useContactForm"
import { services } from "../../data/services"
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "../../lib/animations"

export function ContactSection() {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="section-padding bg-ivory relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4DDD0 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <SectionHeading
          label="Contact"
          title="Commençons par nous parler"
          subtitle="La première étape est souvent la plus belle. Envoyez un message, posez vos questions, ou réservez directement — sans pression, à votre rythme."
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
              <p className="font-cormorant text-2xl font-medium text-warm-900">Sarah Gueuné</p>
              <p className="font-sans text-sm text-warm-500">Praticienne en soins énergétiques</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "contact@lesmainsdocoeur.fr",
                  href: "mailto:contact@lesmainsdocoeur.fr",
                },
                {
                  Icon: Phone,
                  label: "Téléphone",
                  value: "+33 6 00 00 00 00",
                  href: "tel:+33600000000",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  value: "@lesmainsdocoeur",
                  href: "https://instagram.com",
                },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blush/20 transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-full bg-blush/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blush/60 transition-colors">
                    <Icon size={15} className="text-rose-deep" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-warm-500">{label}</p>
                    <p className="font-sans text-sm text-warm-800">{value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-4 bg-blush/20 rounded-xl border border-blush/40"
            >
              <p className="font-sans text-xs text-warm-600 leading-relaxed">
                ✦ Réponse sous 48h. Chaque message est lu avec attention et bienveillance.
              </p>
            </motion.div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            variants={slideInRight}
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
                <CheckCircle size={40} className="text-sage-deep" />
                <h3 className="font-cormorant text-3xl font-medium text-warm-900">
                  Message envoyé !
                </h3>
                <p className="font-sans text-warm-600 text-sm leading-relaxed max-w-sm">
                  Merci pour votre message. Sarah vous répondra avec soin dans les 48 heures.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="card p-7 lg:p-10 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-warm-600 font-medium" htmlFor="name">
                      Prénom & Nom *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Marie Dupont"
                      value={values.name}
                      onChange={handleChange}
                      className={`font-sans text-sm text-warm-900 bg-cream/60 rounded-xl px-4 py-3 border outline-none transition-all duration-200 placeholder:text-warm-300 focus:ring-2 focus:ring-rose/25 focus:border-rose/40 ${errors.name ? "border-red-300" : "border-blush/50"}`}
                    />
                    {errors.name && <p className="font-sans text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-warm-600 font-medium" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="marie@exemple.fr"
                      value={values.email}
                      onChange={handleChange}
                      className={`font-sans text-sm text-warm-900 bg-cream/60 rounded-xl px-4 py-3 border outline-none transition-all duration-200 placeholder:text-warm-300 focus:ring-2 focus:ring-rose/25 focus:border-rose/40 ${errors.email ? "border-red-300" : "border-blush/50"}`}
                    />
                    {errors.email && <p className="font-sans text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-warm-600 font-medium" htmlFor="phone">
                      Téléphone (optionnel)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+33 6 00 00 00 00"
                      value={values.phone}
                      onChange={handleChange}
                      className="font-sans text-sm text-warm-900 bg-cream/60 rounded-xl px-4 py-3 border border-blush/50 outline-none transition-all duration-200 placeholder:text-warm-300 focus:ring-2 focus:ring-rose/25 focus:border-rose/40"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs text-warm-600 font-medium" htmlFor="service">
                      Soin souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={handleChange}
                      className="font-sans text-sm text-warm-900 bg-cream/60 rounded-xl px-4 py-3 border border-blush/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-rose/25 focus:border-rose/40 appearance-none cursor-pointer"
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
                  <label className="font-sans text-xs text-warm-600 font-medium" htmlFor="message">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Partagez ce qui vous amène, vos questions, vos disponibilités..."
                    value={values.message}
                    onChange={handleChange}
                    className={`font-sans text-sm text-warm-900 bg-cream/60 rounded-xl px-4 py-3 border outline-none transition-all duration-200 placeholder:text-warm-300 focus:ring-2 focus:ring-rose/25 focus:border-rose/40 resize-none ${errors.message ? "border-red-300" : "border-blush/50"}`}
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
