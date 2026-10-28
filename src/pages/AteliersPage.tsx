import { motion } from "framer-motion"
import { CalendarDays, Clock, Euro, Leaf, MapPin, Phone, Users, Mail } from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { SectionHeading } from "../components/ui/SectionHeading"
import { WorkshopCalendar } from "../components/workshops/WorkshopCalendar"
import { WorkshopMessage } from "../components/workshops/WorkshopCard"
import { useWorkshops } from "../components/workshops/useWorkshops"
import { contact, workshopIntro, workshopPractical, workshopSteps } from "../data/workshops"
import { fadeInUp, staggerContainer } from "../lib/animations"

const practicalIcons = [Clock, MapPin, Users, Euro, Leaf, Phone]

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 bg-ivory">
      <motion.div
        className="absolute -top-24 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(196,181,253,0.35) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 -right-40 w-[460px] h-[460px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.4) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="section-container relative grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.nav variants={fadeInUp} aria-label="Fil d'Ariane" className="mb-6 font-sans text-xs text-warm-600">
            <a href="/" className="hover:text-rose-600 transition-colors">Accueil</a>
            <span className="mx-2 text-warm-400">/</span>
            <span aria-current="page">Ateliers</span>
          </motion.nav>
          <motion.p variants={fadeInUp} className="section-label mb-3">Ateliers collectifs</motion.p>
          <motion.h1 variants={fadeInUp} className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-warm-900 leading-[1.08] mb-6">
            {workshopIntro.title}
          </motion.h1>
          {workshopIntro.paragraphs.map((p) => (
            <motion.p key={p} variants={fadeInUp} className="font-sans text-warm-700 leading-relaxed mb-4 max-w-xl">
              {p}
            </motion.p>
          ))}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
            <a href="#calendrier" className="btn-primary">
              <CalendarDays size={16} /> Voir les prochaines dates
            </a>
            <a href="/#contact" className="btn-soft">Poser une question</a>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="p-6 sm:p-8 rounded-3xl border border-white/70 shadow-card"
          style={{ background: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(20px)" }}
        >
          <p className="font-hand text-2xl text-rose-500 mb-5">en pratique</p>
          <dl className="flex flex-col gap-4">
            {workshopPractical.map(({ label, value }, i) => {
              const Icon = practicalIcons[i] ?? Leaf
              return (
                <div key={label} className="flex gap-4">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-rose-50 text-rose-500">
                    <Icon size={17} />
                  </span>
                  <div>
                    <dt className="font-sans text-[11px] font-bold uppercase tracking-wider text-warm-500">{label}</dt>
                    <dd className="font-sans text-sm text-warm-800 leading-snug mt-0.5">{value}</dd>
                  </div>
                </div>
              )
            })}
          </dl>
        </motion.aside>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="section-container relative">
        <SectionHeading
          label="Déroulé"
          title="Comment se passe un atelier ?"
          subtitle="Le thème change chaque mois, le fil reste le même : on arrive, on partage, on pratique, on repart plus léger."
          centered
          className="mb-14"
        />
        <motion.ol
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div
            className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(211,105,105,0.35), transparent)" }}
            aria-hidden="true"
          />
          {workshopSteps.map((step, i) => (
            <motion.li key={step.title} variants={fadeInUp} className="relative flex flex-col items-center text-center gap-3">
              <span className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-card font-cormorant text-2xl font-semibold text-rose-500 relative">
                {i + 1}
              </span>
              <h3 className="font-cormorant text-2xl font-medium text-warm-900">{step.title}</h3>
              <p className="font-sans text-sm text-warm-700 leading-relaxed max-w-xs">{step.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

function Calendar() {
  const state = useWorkshops()

  return (
    <section id="calendrier" className="section-padding bg-ivory relative overflow-hidden scroll-mt-16">
      <motion.div
        className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.28) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="section-container relative">
        <SectionHeading
          label="Calendrier"
          title="Les prochains ateliers"
          subtitle="Les jours en couleur ont un atelier : choisissez une date pour découvrir le thème, les places restantes et réserver auprès de Sarah."
          className="mb-12"
        />

        {state.status === "loading" && (
          <div className="grid lg:grid-cols-2 gap-6" aria-busy="true">
            <div className="h-96 rounded-3xl bg-white/40 animate-pulse-soft" />
            <div className="h-40 rounded-2xl bg-white/40 animate-pulse-soft" />
          </div>
        )}

        {state.status === "error" && (
          <WorkshopMessage>
            Le calendrier des ateliers n'a pas pu être chargé.{" "}
            <a href="/#contact" className="text-rose-600 font-semibold hover:underline">Contactez Sarah</a> pour connaître les prochaines dates.
          </WorkshopMessage>
        )}

        {state.status === "ready" && <WorkshopCalendar workshops={state.items} />}
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="pb-20 lg:pb-28 bg-ivory">
      <div className="section-container">
        <div
          className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #3B1F65 100%)" }}
        >
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(211,105,105,0.35) 0%, transparent 70%)" }}
          />
          <p className="font-hand text-2xl text-rose-300 mb-2 relative">une question ?</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl font-light text-white mb-4 relative">
            Pas sûr que l'atelier soit fait pour vous ?
          </h2>
          <p className="font-sans text-sm sm:text-base max-w-xl mx-auto mb-8 relative" style={{ color: "rgba(237,233,254,0.8)" }}>
            Appelez ou écrivez à Sarah : elle prend le temps de vous répondre et de vous orienter vers l'atelier, ou le soin, qui vous correspond.
          </p>
          <div className="flex flex-wrap justify-center gap-3 relative">
            <a href={`tel:${contact.phone}`} className="btn-primary">
              <Phone size={16} /> {contact.phoneLabel}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans font-semibold text-sm text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              <Mail size={16} /> Écrire un e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AteliersPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Calendar />
        <ClosingCta />
      </main>
      <Footer />
    </>
  )
}
