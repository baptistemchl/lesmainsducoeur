import { useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Clock, Mail, MessageCircle, Phone } from "lucide-react"
import { fadeInUp } from "../../lib/animations"
import { contact, type Workshop } from "../../data/workshops"

const fmtDay = new Intl.DateTimeFormat("fr-FR", { day: "2-digit" })
const fmtMonth = new Intl.DateTimeFormat("fr-FR", { month: "short" })
const fmtWeekday = new Intl.DateTimeFormat("fr-FR", { weekday: "long" })
export const fmtFull = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" })

function contactLinks(w: Workshop) {
  const label = `l'atelier « ${w.title} » du ${fmtFull.format(w.date)}${w.time ? ` (${w.time})` : ""}`
  const message = `Bonjour Sarah, je souhaiterais réserver une place pour ${label}.`
  return [
    { Icon: Phone, label: "Appeler", href: `tel:${contact.phone}`, color: "#8B5CF6" },
    { Icon: MessageCircle, label: "SMS", href: `sms:${contact.phone}?&body=${encodeURIComponent(message)}`, color: "#D36969" },
    {
      Icon: Mail,
      label: "Email",
      href: `mailto:${contact.email}?subject=${encodeURIComponent(`Réservation — ${w.title}`)}&body=${encodeURIComponent(message)}`,
      color: "#F59E0B",
    },
  ]
}

function SeatDots({ total, left }: { total: number; left: number }) {
  const taken = total - left
  return (
    <div className="flex flex-wrap gap-1.5" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: i < taken ? "#D36969" : "rgba(211, 105, 105, 0.18)" }}
        />
      ))}
    </div>
  )
}

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const [open, setOpen] = useState(false)
  const { seatsLeft: left, seatsTotal: total } = workshop
  const full = left <= 0

  return (
    <motion.article
      variants={fadeInUp}
      className={`relative flex gap-5 p-5 lg:p-6 rounded-2xl border transition-shadow duration-300 ${
        full ? "border-warm-200/60 opacity-70" : "border-rose-muted/40 hover:shadow-card-hover"
      }`}
      style={{ background: "rgba(255, 255, 255, 0.55)", backdropFilter: "blur(16px)" }}
    >
      {workshop.demo && (
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-gold-pale font-sans text-[10px] font-bold uppercase tracking-wider text-gold-warm">
          Exemple
        </span>
      )}
      <div
        className="flex flex-col items-center justify-center w-16 h-20 rounded-xl flex-shrink-0"
        style={{ background: full ? "rgba(169, 155, 196, 0.12)" : "rgba(211, 105, 105, 0.1)" }}
      >
        <span className={`font-cormorant text-3xl font-semibold leading-none ${full ? "text-warm-600" : "text-rose-500"}`}>
          {fmtDay.format(workshop.date)}
        </span>
        <span className="font-sans text-xs font-bold uppercase tracking-wider text-warm-700 mt-1">
          {fmtMonth.format(workshop.date).replace(".", "")}
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="font-sans text-xs font-semibold tracking-wider text-warm-600 first-letter:uppercase">
          {fmtWeekday.format(workshop.date)}
        </p>
        <h3 className="font-cormorant text-xl lg:text-2xl font-medium text-warm-900 leading-snug">
          {workshop.title}
        </h3>
        {workshop.time && (
          <p className="inline-flex items-center gap-1.5 font-sans text-sm text-warm-700">
            <Clock size={14} className="text-sage-vibrant" />
            {workshop.time}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 mt-2">
          <div className="flex flex-col gap-1.5">
            <SeatDots total={total} left={left} />
            <p className={`font-sans text-xs font-semibold ${full ? "text-warm-600" : left <= 3 ? "text-rose-600" : "text-nature-deep"}`}>
              {full ? "Complet" : left === 1 ? "Il reste 1 place" : `Il reste ${left} places sur ${total}`}
            </p>
          </div>
          {full ? (
            <span className="btn-soft !px-6 !py-2.5 opacity-60 cursor-default hover:!translate-y-0">Complet</span>
          ) : (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="btn-primary !px-6 !py-2.5"
            >
              Réserver ma place
            </button>
          )}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-2 border-t border-rose-muted/40 flex flex-col gap-3">
                <p className="font-sans text-sm text-warm-700">
                  Contactez Sarah pour réserver, elle vous confirme votre place :
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {contactLinks(workshop).map(({ Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex flex-col items-center gap-1.5 py-3 rounded-xl bg-white/70 border border-warm-200/70 font-sans text-xs font-semibold text-warm-800 hover:shadow-card hover:-translate-y-0.5 transition-all"
                    >
                      <Icon size={18} style={{ color }} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export function WorkshopMessage({ children }: { children: ReactNode }) {
  return (
    <div
      className="p-8 rounded-2xl border border-rose-muted/40 text-center font-sans text-warm-700"
      style={{ background: "rgba(255, 255, 255, 0.55)", backdropFilter: "blur(16px)" }}
    >
      {children}
    </div>
  )
}
