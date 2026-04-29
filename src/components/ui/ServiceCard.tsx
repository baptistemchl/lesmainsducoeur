import { motion } from "framer-motion"
import type { Service } from "../../data/services"
import { floatUpRotate } from "../../lib/animations"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { color } = service

  return (
    <motion.article
      variants={floatUpRotate}
      whileHover={{ y: -8, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col group cursor-default relative overflow-hidden rounded-3xl transition-all duration-500"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Image header */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        {/* Voile gradient pour lisibilité du badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/30 via-transparent to-transparent pointer-events-none" />

        {/* Badge prix — en haut à droite */}
        <div
          className="absolute top-4 right-4 px-4 py-2 rounded-full font-cormorant text-lg font-medium"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(12px)",
            color,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          {service.price}
        </div>

        {/* Icône — en bas à gauche */}
        <div
          className="absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(12px)",
            color,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
          aria-hidden="true"
        >
          {service.icon}
        </div>
      </div>

      {/* Glow border au hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${color}25, inset 0 0 30px ${color}08`,
        }}
      />

      {/* Contenu textuel */}
      <div className="flex flex-col gap-4 p-6 lg:p-7 flex-1 relative">
        <h3
          className="font-cormorant text-2xl font-medium text-warm-900 leading-tight transition-colors duration-300"
          style={{ ["--hover-color" as string]: color }}
        >
          {service.name}
        </h3>

        <p className="font-sans text-warm-700 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Liste des bienfaits */}
        <ul className="flex flex-col gap-1.5 mt-1">
          {service.benefits.slice(0, 4).map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 font-sans text-xs text-warm-700 leading-relaxed"
            >
              <span className="mt-0.5 flex-shrink-0" style={{ color }}>✦</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Footer — durée et modalité */}
        <div
          className="mt-auto pt-4 flex flex-col gap-1.5"
          style={{ borderTop: `1px solid ${color}20` }}
        >
          <p
            className="font-sans text-xs font-semibold tracking-wide flex items-center gap-1.5"
            style={{ color }}
          >
            <span>⏱</span> {service.duration}
          </p>
          <p className="font-sans text-xs text-warm-500 leading-snug">
            {service.modality}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
