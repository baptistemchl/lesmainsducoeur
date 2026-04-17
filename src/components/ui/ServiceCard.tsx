import { motion } from "framer-motion"
import type { Service } from "../../data/services"
import { floatUpRotate } from "../../lib/animations"

const iconColors = ["#E84393", "#8B5CF6", "#F59E0B", "#FB7185", "#7C3AED", "#F97316"]

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const colorIndex = ["magnetisme", "lahochi", "nettoyage-energetique", "guidance", "guidance-deblocage", "desenvoûtement"].indexOf(service.id)
  const color = iconColors[colorIndex >= 0 ? colorIndex : 0]

  return (
    <motion.article
      variants={floatUpRotate}
      whileHover={{ y: -10, rotate: 0, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
      whileTap={{ scale: 0.98 }}
      className="p-7 lg:p-8 flex flex-col gap-4 group cursor-default relative overflow-hidden rounded-2xl transition-all duration-500"
      style={{
        background: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      {/* Glow de fond au hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}15, transparent 70%)`,
        }}
      />

      {/* Glow border au hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `0 0 30px ${color}15, inset 0 0 30px ${color}08`,
        }}
      />

      <div className="relative flex items-center justify-between">
        <motion.span
          className="text-2xl group-hover:scale-125 transition-transform duration-300"
          aria-hidden="true"
        >
          {service.icon}
        </motion.span>
        {service.duration && (
          <span
            className="font-sans text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: `${color}15`,
              color,
            }}
          >
            {service.duration}
          </span>
        )}
      </div>

      <h3 className="relative font-cormorant text-2xl font-medium text-warm-900 leading-tight group-hover:text-rose-deep transition-colors duration-300">
        {service.name}
      </h3>

      <p className="relative font-sans text-warm-700 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      <div
        className="relative pt-3 transition-colors duration-300"
        style={{
          borderTop: `1px solid ${color}20`,
        }}
      >
        <p
          className="font-sans text-xs font-semibold tracking-wide"
          style={{ color }}
        >
          ✦ {service.benefit}
        </p>
      </div>
    </motion.article>
  )
}
