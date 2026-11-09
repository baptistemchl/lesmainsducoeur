import { useRef, useState, type ReactNode } from "react"
import { AnimatePresence, motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion"
import { ArrowDown, ArrowRight, Clock, Info, Mail, MapPin, MessageCircle, Phone, Plus, Star } from "lucide-react"
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { services, type Service } from "../data/services"
import { serviceDetails, type ServiceDetail } from "../data/serviceDetails"
import { contact, showDemoWorkshops } from "../data/workshops"
import googleData from "../data/google-reviews.json"

/** Couleur de chaque soin : `accent` pour le décor, `ink` pour le texte (contraste AA sur fond clair). */
const tones: Record<string, { accent: string; ink: string; wash: string }> = {
  "nettoyage-energetique": { accent: "#D36969", ink: "#9E2E2E", wash: "rgba(239,184,184,0.5)" },
  lahochi: { accent: "#8B5CF6", ink: "#6D28D9", wash: "rgba(196,181,253,0.5)" },
  magnetisme: { accent: "#F59E0B", ink: "#A15C07", wash: "rgba(253,230,138,0.55)" },
  abhyanga: { accent: "#FB7185", ink: "#BE123C", wash: "rgba(254,205,211,0.6)" },
  accompagnement: { accent: "#588157", ink: "#3F6B45", wash: "rgba(163,177,138,0.45)" },
}

type Tone = (typeof tones)[string]

const ease = [0.16, 1, 0.3, 1] as const

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

function contactLinks(service: Service) {
  const message = `Bonjour Sarah, je suis intéressé(e) par : ${service.name}. Pouvez-vous me recontacter pour en parler ?`
  return [
    { Icon: Phone, label: "Appeler", sub: contact.phoneLabel, href: `tel:${contact.phone}` },
    { Icon: MessageCircle, label: "Envoyer un SMS", sub: "message pré-rempli", href: `sms:${contact.phone}?&body=${encodeURIComponent(message)}` },
    {
      Icon: Mail,
      label: "Écrire un e-mail",
      sub: contact.email,
      href: `mailto:${contact.email}?subject=${encodeURIComponent(service.name)}&body=${encodeURIComponent(message)}`,
    },
  ]
}

/** Étiquette visible uniquement sur la version de test : signale un texte à remplacer par Sarah. */
function Draft({ className = "ml-3" }: { className?: string }) {
  if (!showDemoWorkshops) return null
  return (
    <span className={`${className} align-middle inline-flex items-center rounded-full border border-dashed border-warm-400 px-2.5 py-0.5 font-sans text-[11px] font-semibold text-warm-700 whitespace-nowrap`}>
      texte d’exemple
    </span>
  )
}

/** Une partie est « d'exemple » tant que Sarah n'a pas fourni son texte. */
const isDraft = (detail: ServiceDetail, part: NonNullable<ServiceDetail["fromSarah"]>[number]) =>
  !detail.fromSarah?.includes(part)

function H2({ id, children, draft }: { id?: string; children: ReactNode; draft?: boolean }) {
  return (
    <h2 id={id} className="font-cormorant text-3xl lg:text-[2.6rem] font-light text-warm-900 leading-tight mb-6 scroll-mt-28 text-balance">
      {children}
      {draft && <Draft />}
    </h2>
  )
}

/* ───────────────────────── En-tête ───────────────────────── */

function Hero({ service, detail, tone }: { service: Service; detail: ServiceDetail; tone: Tone }) {
  const photo = detail.photos[0]

  return (
    <section className="relative overflow-hidden bg-ivory pt-[5rem] pb-14 lg:pt-36 lg:pb-24">
      <div
        className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full pointer-events-none blur-3xl"
        style={{ background: `radial-gradient(circle, ${tone.wash} 0%, transparent 68%)` }}
        aria-hidden="true"
      />
      <div className="section-container relative grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] gap-8 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <nav aria-label="Fil d'Ariane" className="hidden sm:block mb-4 lg:mb-8 font-sans text-xs text-warm-700">
            <a href="/" className="hover:text-rose-600 transition-colors">Accueil</a>
            <span className="mx-2 text-warm-400" aria-hidden="true">/</span>
            <a href="/#soins" className="hover:text-rose-600 transition-colors">Soins</a>
            <span className="mx-2 text-warm-400" aria-hidden="true">/</span>
            <span aria-current="page">{service.name}</span>
          </nav>

          <h1 className="font-cormorant font-light text-warm-900 leading-[1.02] tracking-[-0.01em] text-[2.45rem] sm:text-6xl lg:text-[4.6rem] text-balance">
            {service.name}
          </h1>
          <p className="font-hand text-[1.5rem] sm:text-3xl leading-snug mt-2 lg:mt-4 max-w-md" style={{ color: tone.ink }}>
            {detail.tagline}
          </p>
          {isDraft(detail, "tagline") && <Draft className="mt-2" />}

          <p className="sr-only">
            Tarif {service.price}, durée {service.duration}, {service.modality}.
          </p>
          <ul
            className="mt-4 lg:mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-rose-200/80 py-3 lg:py-4 font-sans text-[15px] text-warm-800"
            aria-hidden="true"
          >
            <li className="font-cormorant text-[2.1rem] font-medium leading-none tabular-nums" style={{ color: tone.ink }}>
              {service.price}
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} style={{ color: tone.accent }} />
              {detail.shortDuration}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} style={{ color: tone.accent }} />
              {detail.shortModality}
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-5 lg:mt-9">
            <a href="#contact-soin" className="btn-primary">
              Prendre contact
            </a>
            <a
              href="#deroule"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-warm-800 underline decoration-rose-300 decoration-2 underline-offset-[6px] hover:decoration-rose-500 transition-colors"
            >
              {detail.stepsLink ?? "Voir le déroulé"} <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <figure className="relative mx-auto w-full max-w-[300px] sm:max-w-[25rem] lg:max-w-none order-first lg:order-none">
          <div
            className="absolute -inset-6 rounded-[999px_999px_40px_40px] blur-2xl pointer-events-none"
            style={{ background: tone.wash }}
            aria-hidden="true"
          />
          <motion.div
            className="relative"
            initial={{ opacity: 0, clipPath: "inset(18% 8% 0% 8% round 999px 999px 28px 28px)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 999px 999px 28px 28px)" }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width={1086}
              height={1448}
              fetchPriority="high"
              className="w-full aspect-[4/3] sm:aspect-[4/5] object-cover rounded-[999px_999px_24px_24px] lg:rounded-[999px_999px_28px_28px] shadow-card"
              style={{ objectPosition: photo.position ?? "50% 50%" }}
            />
          </motion.div>
          <figcaption className="absolute -bottom-4 left-6 sm:left-8 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 shadow-card font-hand text-xl text-warm-800">
            au cabinet, à Saint-Alban
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

/* ───────────────────────── Contenu ───────────────────────── */

function Benefits({ service, detail, tone }: { service: Service; detail: ServiceDetail; tone: Tone }) {
  return (
    <div>
      <H2>En quelques mots</H2>
      <p className="font-sans text-lg text-warm-800 leading-relaxed max-w-[38rem]">{service.description}</p>

      <h3 className="font-cormorant text-[1.6rem] font-light text-warm-900 mt-12 mb-5">Ce que {detail.noun ?? "ce soin"} peut vous apporter</h3>
      <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-rose-200/70">
        {service.benefits.map((b) => (
          <li key={b} className="flex items-start gap-3 py-4 border-b border-rose-200/70 font-sans text-[15px] text-warm-800 leading-snug">
            <svg viewBox="0 0 16 16" className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true">
              <path d="M8 0c.6 4.4 3.6 7.4 8 8-4.4.6-7.4 3.6-8 8-.6-4.4-3.6-7.4-8-8 4.4-.6 7.4-3.6 8-8Z" fill={tone.accent} />
            </svg>
            {b}
          </li>
        ))}
      </ul>
      <Disclaimer />
    </div>
  )
}

function ForWhom({ detail, tone }: { detail: ServiceDetail; tone: Tone }) {
  return (
    <div>
      <H2 draft={isDraft(detail, "forWhom")}>{capitalize(detail.noun ?? "ce soin")} est pour vous si…</H2>
      <ul className="flex flex-col gap-5 max-w-[38rem]">
        {detail.forWhom.map((line) => (
          <li key={line} className="flex gap-4 font-sans text-[17px] text-warm-800 leading-relaxed">
            <span className="mt-[0.7em] h-px w-6 flex-shrink-0" style={{ background: tone.accent }} aria-hidden="true" />
            {line}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Le moment fort de la page : le fil de la séance se dessine au fil de la lecture. */
function Timeline({ detail, tone }: { detail: ServiceDetail; tone: Tone }) {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const steps = detail.after ? [...detail.steps, { title: "Et après", text: detail.after }] : detail.steps

  return (
    <div>
      <H2 id="deroule" draft={isDraft(detail, "steps")}>
        {detail.stepsTitle ?? "Le déroulé d’une séance"}
      </H2>
      <ol ref={ref} className="relative mt-10 max-w-[38rem]">
        <span className="absolute left-[11px] top-2 bottom-2 w-px bg-rose-200" aria-hidden="true" />
        <motion.span
          className="absolute left-[10px] top-2 bottom-2 w-[3px] rounded-full origin-top"
          style={{ background: `linear-gradient(${tone.accent}, ${tone.wash})`, scaleY: reduce ? 1 : progress }}
          aria-hidden="true"
        />
        {steps.map((step, i) => (
          <TimelineStep key={step.title} step={step} index={i} last={i === steps.length - 1} tone={tone} />
        ))}
      </ol>
    </div>
  )
}

function TimelineStep({
  step,
  index,
  last,
  tone,
}: {
  step: { title: string; time?: string; text: string }
  index: number
  last: boolean
  tone: Tone
}) {
  const ref = useRef<HTMLLIElement>(null)
  const lit = useInView(ref, { margin: "0px 0px -45% 0px" })
  return (
    <li ref={ref} className={`relative pl-12 ${last ? "" : "pb-11"}`}>
      <span
        className="absolute left-0 top-1 w-[23px] h-[23px] rounded-full border-2 bg-ivory transition-[background-color,box-shadow] duration-700"
        style={{
          borderColor: tone.accent,
          backgroundColor: lit ? tone.accent : "#FDF2F8",
          boxShadow: lit ? `0 4px 18px ${tone.wash}` : "none",
        }}
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-cormorant text-[1.65rem] font-medium text-warm-900 leading-tight">
          <span className="sr-only">Étape {index + 1} : </span>
          {step.title}
        </h3>
        {step.time && (
          <span className="font-sans text-xs font-semibold tabular-nums" style={{ color: tone.ink }}>
            {step.time}
          </span>
        )}
      </div>
      <p className={`font-sans text-[15px] leading-relaxed mt-2 ${last ? "text-warm-800 font-medium" : "text-warm-700"}`}>
        {step.text}
      </p>
    </li>
  )
}

/** Le mot de Sarah, à la première personne. */
function Engagement({ detail, tone }: { detail: ServiceDetail; tone: Tone }) {
  if (!detail.engagement) return null
  return (
    <figure className="relative max-w-[40rem] border-l-[3px] pl-6 sm:pl-9" style={{ borderColor: tone.accent }}>
      <h2 className="font-cormorant text-3xl lg:text-[2.6rem] font-light text-warm-900 leading-tight mb-6 text-balance">
        {detail.engagement.title}
      </h2>
      <blockquote className="flex flex-col gap-4 font-sans text-[16px] sm:text-[17px] text-warm-800 leading-relaxed">
        {detail.engagement.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </blockquote>
      <figcaption className="font-hand text-2xl mt-5" style={{ color: tone.ink }}>
        — Sarah
      </figcaption>
    </figure>
  )
}

function Remote({ detail, tone }: { detail: ServiceDetail; tone: Tone }) {
  if (!detail.remote) return null
  return (
    <div
      className="rounded-[28px] p-7 sm:p-10 relative overflow-hidden"
      style={{ background: `linear-gradient(140deg, #FFFFFF 0%, ${tone.wash} 140%)` }}
    >
      <H2 draft={isDraft(detail, "remote")}>Et à distance ?</H2>
      <ol className="flex flex-col gap-4 max-w-[36rem]">
        {detail.remote.map((line, i) => (
          <li key={line} className="flex gap-4 font-sans text-[15px] text-warm-800 leading-relaxed">
            <span className="font-cormorant text-2xl leading-none font-medium tabular-nums w-5 flex-shrink-0" style={{ color: tone.ink }}>
              {i + 1}
            </span>
            {line}
          </li>
        ))}
      </ol>
    </div>
  )
}

type Review = (typeof googleData.reviews)[number]

function Reviews({ detail, tone }: { detail: ServiceDetail; tone: Tone }) {
  const reviews = detail.reviews
    .map((name) => googleData.reviews.find((r) => r.author === name))
    .filter((r): r is Review => Boolean(r))
  if (reviews.length === 0) return null

  return (
    <div>
      <H2>Les mots des personnes reçues par Sarah</H2>
      <div className="flex flex-col gap-10 max-w-[38rem]">
        {reviews.map((r) => (
          <figure key={r.id}>
            <svg viewBox="0 0 32 24" className="w-8 h-6 mb-3" aria-hidden="true">
              <path
                d="M0 24V13.7C0 5.9 4.4 1.3 12.3 0l1.2 3.4C8.9 4.8 6.6 7.6 6.4 11.4H12V24H0Zm18.4 0V13.7C18.4 5.9 22.8 1.3 30.8 0L32 3.4c-4.6 1.4-6.9 4.2-7.1 8H30.4V24h-12Z"
                fill={tone.accent}
                fillOpacity="0.55"
              />
            </svg>
            <blockquote className="font-cormorant text-[1.45rem] sm:text-[1.6rem] font-light text-warm-900 leading-snug whitespace-pre-line">
              {r.content}
            </blockquote>
            <figcaption className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-sm text-warm-700">
              <span className="font-semibold text-warm-900">{r.author}</span>
              <span className="inline-flex gap-0.5" role="img" aria-label={`${r.rating} étoiles sur 5`}>
                {Array.from({ length: r.rating }, (_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" aria-hidden="true" />
                ))}
              </span>
              <span>Avis Google</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {googleData.place.profileLink && (
        <a
          href={googleData.place.profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-semibold text-warm-800 underline decoration-rose-300 decoration-2 underline-offset-[6px] hover:decoration-rose-500 transition-colors"
        >
          Lire tous les avis sur Google <ArrowRight size={15} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}

function Faq({ detail, tone }: { detail: ServiceDetail; tone: Tone }) {
  return (
    <div>
      <H2 draft={isDraft(detail, "faq")}>Vos questions</H2>
      <div className="border-t border-rose-200/80 max-w-[38rem]">
        {detail.faq.map((f) => (
          <details key={f.question} className="group border-b border-rose-200/80">
            <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-sans text-[16px] font-semibold text-warm-900 hover:text-rose-700 transition-colors">
              {f.question}
              <Plus
                size={18}
                className="flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                style={{ color: tone.accent }}
                aria-hidden="true"
              />
            </summary>
            <p className="pb-6 -mt-1 font-sans text-[15px] text-warm-700 leading-relaxed pr-10">{f.answer}</p>
          </details>
        ))}
      </div>
      <a
        href="/#faq"
        className="inline-flex items-center gap-2 mt-6 font-sans text-sm font-semibold text-warm-800 underline decoration-rose-300 decoration-2 underline-offset-[6px] hover:decoration-rose-500 transition-colors"
      >
        Toutes les questions fréquentes <ArrowRight size={15} aria-hidden="true" />
      </a>
    </div>
  )
}

function Disclaimer() {
  return (
    <p className="flex gap-3 max-w-[38rem] mt-6 font-sans text-sm text-warm-700 leading-relaxed">
      <Info size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
      Les soins proposés sont un accompagnement complémentaire au bien-être. Ils ne remplacent pas un avis, un diagnostic ou un
      traitement médical ou psychologique.
    </p>
  )
}

/* ───────────────────── Panneau pratique ───────────────────── */

function ContactButtons({ service, dark = false }: { service: Service; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-2.5">
      {contactLinks(service).map(({ Icon, label, sub, href }, i) => (
        <a
          key={label}
          href={href}
          className={
            i === 0
              ? "group flex items-center gap-3 rounded-2xl px-4 py-3 text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 bg-rose-ink hover:bg-rose-deep"
              : dark
                ? "group flex items-center gap-3 rounded-2xl px-4 py-3 text-white border border-white/25 hover:bg-white/10 transition-colors"
                : "group flex items-center gap-3 rounded-2xl px-4 py-3 text-warm-900 bg-white/70 border border-rose-200 hover:border-rose-300 hover:bg-white transition-colors"
          }
        >
          <Icon size={18} className="flex-shrink-0" aria-hidden="true" />
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-sans text-sm font-semibold">{label}</span>
            <span className={`font-sans text-xs truncate ${i === 0 ? "text-white" : dark ? "text-white/80" : "text-warm-700"}`}>{sub}</span>
          </span>
        </a>
      ))}
    </div>
  )
}

function PracticalPanel({ service, tone }: { service: Service; tone: Tone }) {
  return (
    <aside className="hidden lg:block" aria-label="Informations pratiques">
      <div
        className="sticky top-28 rounded-[28px] p-7 border border-white/80 shadow-card"
        style={{ background: "rgba(255,255,255,0.62)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      >
        <p className="font-cormorant text-xl font-medium text-warm-900">{service.name}</p>
        <p className="font-cormorant text-5xl font-medium leading-none mt-3 tabular-nums" style={{ color: tone.ink }}>
          {service.price}
        </p>
        <ul className="mt-5 flex flex-col gap-2.5 font-sans text-sm text-warm-800">
          <li className="flex gap-2.5">
            <Clock size={16} className="flex-shrink-0 mt-0.5" style={{ color: tone.accent }} aria-hidden="true" />
            {service.duration}
          </li>
          <li className="flex gap-2.5">
            <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: tone.accent }} aria-hidden="true" />
            {service.modality}
          </li>
        </ul>
        <div className="h-px bg-rose-200/80 my-6" />
        <p className="font-hand text-2xl text-warm-800 mb-3">prendre rendez-vous</p>
        <ContactButtons service={service} />
        <p className="mt-4 font-sans text-xs text-warm-700">
          Règlement sur place.{" "}
          <a href="/#contact" className="underline underline-offset-2 hover:text-rose-700">
            Ou passez par le formulaire
          </a>
          .
        </p>
      </div>
    </aside>
  )
}

/** Barre de contact sur téléphone : apparaît après l'en-tête, s'efface au bloc contact. */
function MobileBar({ service, detail, show }: { service: Service; detail: ServiceDetail; show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="lg:hidden fixed inset-x-3 z-40 flex items-center justify-between gap-3 rounded-full pl-5 pr-1.5 py-1.5 border border-white/80 shadow-card"
          style={{
            bottom: "max(0.75rem, env(safe-area-inset-bottom))",
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <span className="min-w-0 font-sans text-sm text-warm-800 truncate">
            <span className="font-semibold text-warm-900">{service.price}</span> · {detail.shortName}
          </span>
          <a href="#contact-soin" className="flex-shrink-0 rounded-full bg-rose-ink px-5 py-2.5 font-sans text-sm font-semibold text-white">
            Prendre contact
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ───────────────────────── Fin de page ───────────────────────── */

function ContactBlock({ service, detail }: { service: Service; detail: ServiceDetail }) {
  return (
    <section id="contact-soin" className="scroll-mt-24 pt-6 pb-16 lg:pb-24 bg-ivory">
      <div className="section-container">
        <div
          className="rounded-[32px] px-6 py-10 sm:p-12 lg:p-14 relative overflow-hidden grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-center"
          style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #3B1F65 100%)" }}
        >
          <div
            className="absolute -top-24 -left-10 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(211,105,105,0.35) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-cormorant text-[2.1rem] sm:text-5xl font-light text-white leading-tight text-balance">
              {detail.contactLead?.title ?? "Une question avant de vous lancer ?"}
            </h2>
            <p className="font-sans text-[15px] sm:text-base mt-4 max-w-md leading-relaxed" style={{ color: "rgba(237,233,254,0.85)" }}>
              {detail.contactLead?.text ??
                "Appelez Sarah, envoyez-lui un SMS ou un e-mail : elle prend le temps de vous répondre et de convenir avec vous d'un moment, au cabinet ou à distance."}{" "}
              Règlement sur place.
            </p>
          </div>
          <div className="relative">
            <ContactButtons service={service} dark />
          </div>
        </div>
      </div>
    </section>
  )
}

function OtherServices({ current }: { current: string }) {
  const others = services.filter((s) => s.id !== current)
  return (
    <section className="bg-cream py-16 lg:py-24" aria-labelledby="autres-soins">
      <div className="section-container">
        <h2 id="autres-soins" className="font-cormorant text-3xl lg:text-[2.6rem] font-light text-warm-900 mb-10">
          Les autres soins
        </h2>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {others.map((s) => {
            const photo = serviceDetails[s.id]?.photos[0]
            const tone = tones[s.id] ?? tones["nettoyage-energetique"]
            return (
              <li key={s.id}>
                <a href={`/soins/${s.id}/`} className="group block">
                  <div className="overflow-hidden rounded-[999px_999px_20px_20px] aspect-[4/5] bg-rose-100">
                    {photo && (
                      <img
                        src={photo.src}
                        alt=""
                        loading="lazy"
                        width={1086}
                        height={1448}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <p className="mt-4 font-cormorant text-xl sm:text-2xl font-medium text-warm-900 leading-tight group-hover:text-rose-700 transition-colors">
                    {s.name}
                  </p>
                  <p className="mt-1 flex items-center gap-2 font-sans text-sm text-warm-700">
                    <span className="font-semibold tabular-nums" style={{ color: tone.ink }}>
                      {s.price}
                    </span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ───────────────────────── Page ───────────────────────── */

export default function ServicePage({ id }: { id: string }) {
  const service = services.find((s) => s.id === id)
  const detail = serviceDetails[id]
  const tone = tones[id] ?? tones["nettoyage-energetique"]
  const heroEnd = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const [pastHero, setPastHero] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", () => {
    const el = heroEnd.current
    if (el) setPastHero(el.getBoundingClientRect().top < 0)
  })
  const atContact = useInView(contactRef, { margin: "0px 0px -20% 0px" })

  if (!service || !detail) {
    window.location.replace("/#soins")
    return null
  }

  return (
    <>
      <Header />
      <main>
        <Hero service={service} detail={detail} tone={tone} />
        <div ref={heroEnd} aria-hidden="true" />

        <div className="bg-ivory pb-20 lg:pb-28">
          <div className="section-container grid lg:grid-cols-[minmax(0,1fr)_340px] gap-16 xl:gap-24 pt-6 lg:pt-10">
            <article className="flex flex-col gap-20 lg:gap-24 min-w-0">
              <Benefits service={service} detail={detail} tone={tone} />
              <ForWhom detail={detail} tone={tone} />
              <Timeline detail={detail} tone={tone} />
              <Engagement detail={detail} tone={tone} />
              <Remote detail={detail} tone={tone} />
              <Reviews detail={detail} tone={tone} />
              <Faq detail={detail} tone={tone} />
            </article>
            <PracticalPanel service={service} tone={tone} />
          </div>
        </div>

        <div ref={contactRef}>
          <ContactBlock service={service} detail={detail} />
        </div>
        <OtherServices current={service.id} />
      </main>
      <Footer />
      <MobileBar service={service} detail={detail} show={pastHero && !atContact} />
    </>
  )
}
