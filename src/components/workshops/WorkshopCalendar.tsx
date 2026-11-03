import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Workshop } from "../../data/workshops"
import { WorkshopCard, WorkshopMessage, fmtFull } from "./WorkshopCard"

const fmtMonthYear = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric" })
const weekdays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

const dayKey = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
const monthStart = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1)

/** Cases du mois, alignées sur un calendrier commençant le lundi (null = case vide). */
function monthCells(month: Date): (Date | null)[] {
  const offset = (month.getDay() + 6) % 7
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  return [
    ...Array<null>(offset).fill(null),
    ...Array.from({ length: days }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1)),
  ]
}

export function WorkshopCalendar({ workshops }: { workshops: Workshop[] }) {
  const today = new Date()
  const firstMonth = monthStart(today)
  const lastMonth = monthStart(workshops[workshops.length - 1]?.date ?? today)

  // On ouvre sur le prochain atelier où il reste de la place (sinon le prochain tout court)
  const first = workshops.find((w) => w.seatsLeft > 0) ?? workshops[0]
  const [month, setMonth] = useState(() => monthStart(first?.date ?? today))
  const [selected, setSelected] = useState<string | null>(() => (first ? dayKey(first.date) : null))

  const byDay = useMemo(() => {
    const map = new Map<string, Workshop[]>()
    for (const w of workshops) map.set(dayKey(w.date), [...(map.get(dayKey(w.date)) ?? []), w])
    return map
  }, [workshops])

  const inMonth = workshops.filter(
    (w) => w.date.getFullYear() === month.getFullYear() && w.date.getMonth() === month.getMonth(),
  )
  const selectedItems = selected ? byDay.get(selected) ?? [] : []

  const goTo = (delta: number) => {
    const next = new Date(month.getFullYear(), month.getMonth() + delta, 1)
    setMonth(next)
    const first = workshops.find((w) => w.date.getFullYear() === next.getFullYear() && w.date.getMonth() === next.getMonth())
    setSelected(first ? dayKey(first.date) : null)
  }

  return (
    <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-start">
      <div
        className="p-5 sm:p-7 rounded-3xl border border-rose-muted/40 shadow-card"
        style={{ background: "rgba(255, 255, 255, 0.65)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex items-center justify-between mb-5">
          <button
            type="button"
            onClick={() => goTo(-1)}
            disabled={month <= firstMonth}
            aria-label="Mois précédent"
            className="w-10 h-10 rounded-full flex items-center justify-center text-warm-700 border border-rose-muted/60 hover:bg-blush/30 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <h3 className="font-cormorant text-2xl lg:text-3xl font-medium text-warm-900 first-letter:uppercase" aria-live="polite">
            {fmtMonthYear.format(month)}
          </h3>
          <button
            type="button"
            onClick={() => goTo(1)}
            disabled={month >= lastMonth}
            aria-label="Mois suivant"
            className="w-10 h-10 rounded-full flex items-center justify-center text-warm-700 border border-rose-muted/60 hover:bg-blush/30 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center" role="grid">
          {weekdays.map((d) => (
            <div key={d} className="pb-2 font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-warm-500">
              {d}
            </div>
          ))}
          {monthCells(month).map((date, i) => {
            if (!date) return <div key={`empty-${i}`} />
            const key = dayKey(date)
            const items = byDay.get(key)
            const isToday = key === dayKey(today)
            const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate())

            if (!items) {
              return (
                <div
                  key={key}
                  className={`aspect-square flex items-center justify-center rounded-full font-sans text-sm ${
                    isPast ? "text-warm-400" : "text-warm-700"
                  } ${isToday ? "ring-1 ring-sage-light" : ""}`}
                >
                  {date.getDate()}
                </div>
              )
            }

            const full = items.every((w) => w.seatsLeft <= 0)
            const active = key === selected
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelected(key)}
                aria-pressed={active}
                aria-label={`${fmtFull.format(date)} : ${items.map((w) => w.title).join(", ")}${full ? " (complet)" : ""}`}
                className={`relative aspect-square flex flex-col items-center justify-center rounded-full font-sans text-sm font-bold transition-all duration-200 ${
                  active
                    ? full
                      ? "bg-warm-500 text-white shadow-card"
                      : "bg-rose-ink text-white shadow-soft scale-105"
                    : full
                      ? "bg-warm-200/70 text-warm-600 hover:bg-warm-300/70"
                      : "bg-rose-100 text-rose-600 hover:bg-rose-200"
                }`}
              >
                {date.getDate()}
                <span
                  className={`absolute bottom-[14%] w-1 h-1 rounded-full ${active ? "bg-white" : full ? "bg-warm-500" : "bg-rose-500"}`}
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 pt-4 border-t border-rose-muted/40 font-sans text-xs text-warm-700">
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-100 ring-1 ring-rose-300" /> Places disponibles
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-warm-200" /> Complet
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-sans text-sm font-semibold text-warm-700">
          {inMonth.length === 0
            ? "Pas encore d'atelier ce mois-ci."
            : inMonth.length === 1
              ? "1 atelier ce mois-ci"
              : `${inMonth.length} ateliers ce mois-ci`}
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected ?? month.toISOString()}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {selectedItems.length > 0 ? (
              selectedItems.map((w) => <WorkshopCard key={w.id} workshop={w} />)
            ) : (
              <WorkshopMessage>
                {inMonth.length > 0
                  ? "Choisissez une date en couleur dans le calendrier pour découvrir l'atelier."
                  : "Les dates de ce mois seront bientôt annoncées."}
              </WorkshopMessage>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
