import { useEffect, useState, type FormEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CalendarDays, CheckCircle2, Clock, Loader2, MapPin, Users, X } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { staggerContainer, fadeInUp } from "../../lib/animations"
import { workshops as initialWorkshops, type Workshop } from "../../data/workshops"

const tz = "Europe/Paris"
const fmtDay = new Intl.DateTimeFormat("fr-FR", { day: "2-digit", timeZone: tz })
const fmtMonth = new Intl.DateTimeFormat("fr-FR", { month: "short", timeZone: tz })
const fmtWeekday = new Intl.DateTimeFormat("fr-FR", { weekday: "long", timeZone: tz })
const fmtFull = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", timeZone: tz })
const fmtTime = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: tz })

function timeRange(w: Workshop) {
  return `${fmtTime.format(new Date(w.start))} – ${fmtTime.format(new Date(w.end))}`
}

function SeatDots({ seats, taken }: { seats: number; taken: number }) {
  return (
    <div className="flex gap-1.5" aria-hidden="true">
      {Array.from({ length: seats }, (_, i) => (
        <span
          key={i}
          className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
          style={{ background: i < taken ? "#D36969" : "rgba(211, 105, 105, 0.18)" }}
        />
      ))}
    </div>
  )
}

function WorkshopCard({ workshop, onBook }: { workshop: Workshop; onBook: () => void }) {
  const date = new Date(workshop.start)
  const left = workshop.seats - workshop.seatsTaken
  const full = left <= 0

  return (
    <motion.article
      variants={fadeInUp}
      className={`relative flex gap-5 p-5 lg:p-6 rounded-2xl border transition-shadow duration-300 ${
        full ? "border-warm-200/60 opacity-70" : "border-rose-muted/40 hover:shadow-card-hover"
      }`}
      style={{ background: "rgba(255, 255, 255, 0.55)", backdropFilter: "blur(16px)" }}
    >
      {/* Date */}
      <div
        className="flex flex-col items-center justify-center w-16 h-20 rounded-xl flex-shrink-0"
        style={{ background: full ? "rgba(169, 155, 196, 0.12)" : "rgba(211, 105, 105, 0.1)" }}
      >
        <span className={`font-cormorant text-3xl font-semibold leading-none ${full ? "text-warm-600" : "text-rose-500"}`}>
          {fmtDay.format(date)}
        </span>
        <span className="font-sans text-xs font-bold uppercase tracking-wider text-warm-700 mt-1">
          {fmtMonth.format(date).replace(".", "")}
        </span>
      </div>

      {/* Infos */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="font-sans text-xs font-semibold tracking-wider text-warm-600 first-letter:uppercase">
          {fmtWeekday.format(date)}
        </p>
        <h3 className="font-cormorant text-xl lg:text-2xl font-medium text-warm-900 leading-snug">
          {workshop.title}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm text-warm-700">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} className="text-sage-vibrant" />
            {timeRange(workshop)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-coral" />
            {workshop.location}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-2">
          <div className="flex flex-col gap-1.5">
            <SeatDots seats={workshop.seats} taken={workshop.seatsTaken} />
            <p className={`font-sans text-xs font-semibold ${full ? "text-warm-600" : left <= 3 ? "text-rose-600" : "text-nature-deep"}`}>
              {full ? "Complet" : left === 1 ? "Dernière place" : `${left} places restantes sur ${workshop.seats}`}
            </p>
          </div>
          <button
            type="button"
            onClick={onBook}
            disabled={full}
            className={full ? "btn-soft !px-6 !py-2.5 opacity-60 cursor-not-allowed hover:!translate-y-0" : "btn-primary !px-6 !py-2.5"}
          >
            {full ? "Complet" : "Réserver ma place"}
          </button>
        </div>
      </div>
    </motion.article>
  )
}

type Status = "idle" | "sending" | "done"

function BookingModal({ workshop, onClose, onConfirm }: { workshop: Workshop; onClose: () => void; onConfirm: () => void }) {
  const [status, setStatus] = useState<Status>("idle")

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  // Bêta : réservation simulée, remplacée par Cal.com une fois `calLink` renseigné
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    window.setTimeout(() => {
      onConfirm()
      setStatus("done")
    }, 900)
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-warm-200 bg-white/70 font-sans text-sm text-warm-900 placeholder:text-warm-500 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition"

  return (
    <motion.div
      className="fixed inset-0 z-[900] flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-warm-900/40 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative w-full sm:max-w-md max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 bg-white shadow-glass"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 p-2 rounded-full text-warm-500 hover:text-warm-900 hover:bg-warm-100 transition-colors"
        >
          <X size={18} />
        </button>

        {status === "done" ? (
          <div className="flex flex-col items-center text-center gap-4 py-4">
            <CheckCircle2 size={44} className="text-nature-deep" />
            <h3 id="booking-title" className="font-cormorant text-3xl text-warm-900">
              Votre place est réservée
            </h3>
            <p className="font-sans text-sm text-warm-700 leading-relaxed">
              Rendez-vous le <strong className="text-warm-900">{fmtFull.format(new Date(workshop.start))}</strong>, {timeRange(workshop)}.
              Un email de confirmation vous a été envoyé, avec un lien pour annuler si besoin.
            </p>
            <button type="button" onClick={onClose} className="btn-primary mt-2">
              Parfait, merci
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 pr-8">
              <p className="section-label">Réservation</p>
              <h3 id="booking-title" className="font-cormorant text-2xl text-warm-900 leading-snug">
                {workshop.title}
              </h3>
              <p className="font-sans text-sm text-warm-700 inline-flex items-center gap-1.5">
                <CalendarDays size={14} className="text-rose-500" />
                {fmtFull.format(new Date(workshop.start))} · {timeRange(workshop)}
              </p>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="font-sans text-xs font-semibold text-warm-700">Prénom et nom</span>
              <input required name="name" autoComplete="name" className={inputClass} placeholder="Camille Martin" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-sans text-xs font-semibold text-warm-700">Email</span>
              <input required type="email" name="email" autoComplete="email" className={inputClass} placeholder="camille@email.fr" />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-sans text-xs font-semibold text-warm-700">Téléphone</span>
              <input required type="tel" name="phone" autoComplete="tel" className={inputClass} placeholder="06 12 34 56 78" />
            </label>

            <button type="submit" disabled={status === "sending"} className="btn-primary mt-2 w-full">
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Réservation…
                </>
              ) : (
                "Confirmer ma place"
              )}
            </button>
            <p className="font-sans text-xs text-warm-600 text-center">
              Règlement sur place le jour de l'atelier.
            </p>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}

export function WorkshopsSection() {
  const [items, setItems] = useState(initialWorkshops)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = items.find((w) => w.id === selectedId) ?? null

  const confirmBooking = () =>
    setItems((prev) => prev.map((w) => (w.id === selectedId ? { ...w, seatsTaken: w.seatsTaken + 1 } : w)))

  return (
    <section id="ateliers" className="section-padding bg-ivory relative overflow-hidden">
      <motion.div
        className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.25) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative">
        <SectionHeading
          label="Ateliers collectifs"
          title="Se retrouver, en petit groupe"
          subtitle="Deux fois par mois, Sarah réunit un petit cercle de 8 personnes maximum autour d'un thème : méditation, soin énergétique partagé, Ayurvéda. Choisissez une date et réservez votre place."
          className="mb-12"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((w) => (
            <WorkshopCard key={w.id} workshop={w} onBook={() => setSelectedId(w.id)} />
          ))}
        </motion.div>

        <p className="mt-8 font-sans text-sm text-warm-700 flex items-center justify-center gap-2 text-center">
          <Users size={16} className="text-sage-vibrant flex-shrink-0" />
          8 places par atelier · Une date ne vous convient pas ?{" "}
          <a href="#contact" className="text-rose-600 font-semibold underline-offset-4 hover:underline">
            Écrivez-moi
          </a>
        </p>
      </div>

      <AnimatePresence>
        {selected && (
          <BookingModal
            key={selected.id}
            workshop={selected}
            onClose={() => setSelectedId(null)}
            onConfirm={confirmBooking}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
