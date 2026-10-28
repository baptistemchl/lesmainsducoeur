import { motion } from "framer-motion"
import { ArrowRight, Users } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { staggerContainer } from "../../lib/animations"
import { WorkshopCard, WorkshopMessage } from "../workshops/WorkshopCard"
import { useWorkshops } from "../workshops/useWorkshops"

/** Aperçu sur l'accueil : les deux prochaines dates, le reste sur /ateliers/. */
export function WorkshopsSection() {
  const state = useWorkshops()

  return (
    <section id="ateliers" className="section-padding bg-ivory relative overflow-hidden">
      <motion.div
        className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(239,184,184,0.25) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            label="Ateliers collectifs"
            title="Se retrouver, en petit groupe"
            subtitle="Chaque mois, Sarah réunit un petit cercle autour d'un thème : méditation, soin énergétique partagé, Ayurvéda. Découvrez le déroulé et le calendrier des prochaines dates."
          />
          <a href="/ateliers/" className="btn-primary self-start lg:self-auto flex-shrink-0">
            Découvrir les ateliers <ArrowRight size={16} />
          </a>
        </div>

        {state.status === "loading" && (
          <div className="grid md:grid-cols-2 gap-5" aria-busy="true">
            {[0, 1].map((i) => (
              <div key={i} className="h-40 rounded-2xl bg-white/40 animate-pulse-soft" />
            ))}
          </div>
        )}

        {state.status === "error" && (
          <WorkshopMessage>
            Le calendrier des ateliers n'a pas pu être chargé.{" "}
            <a href="#contact" className="text-rose-600 font-semibold hover:underline">Contactez Sarah</a> pour connaître les prochaines dates.
          </WorkshopMessage>
        )}

        {state.status === "ready" && state.items.length === 0 && (
          <WorkshopMessage>
            Les prochaines dates seront bientôt annoncées.{" "}
            <a href="#contact" className="text-rose-600 font-semibold hover:underline">Écrivez-moi</a> pour être prévenu(e).
          </WorkshopMessage>
        )}

        {state.status === "ready" && state.items.length > 0 && (
          <motion.div
            className="grid md:grid-cols-2 gap-5 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {state.items.slice(0, 2).map((w) => (
              <WorkshopCard key={w.id} workshop={w} />
            ))}
          </motion.div>
        )}

        <p className="mt-8 font-sans text-sm text-warm-700 flex items-center justify-center gap-2 text-center flex-wrap">
          <Users size={16} className="text-sage-vibrant flex-shrink-0" />
          Petits groupes · Règlement sur place ·{" "}
          <a href="/ateliers/#calendrier" className="text-rose-600 font-semibold underline-offset-4 hover:underline">
            Voir tout le calendrier
          </a>
        </p>
      </div>
    </section>
  )
}
