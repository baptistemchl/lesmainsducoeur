import { motion } from "framer-motion"
import type { Service } from "../../data/services"
import { scaleIn } from "../../lib/animations"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -8, transition: { duration: 0.25, type: "spring", stiffness: 300 } }}
      whileTap={{ scale: 0.98 }}
      className="card p-7 lg:p-8 flex flex-col gap-4 group cursor-default relative overflow-hidden"
    >
      {/* Glow de fond au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush/0 via-blush/0 to-rose-light/0 group-hover:from-blush/30 group-hover:via-transparent group-hover:to-sage-pale/20 transition-all duration-500 rounded-2xl" />

      <div className="relative flex items-center justify-between">
        <motion.span
          className="text-2xl group-hover:scale-125 transition-transform duration-300"
          aria-hidden="true"
        >
          {service.icon}
        </motion.span>
        {service.duration && (
          <span className="font-sans text-xs text-rose-deep font-medium bg-blush/50 px-3 py-1 rounded-full">
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

      <div className="relative pt-3 border-t border-blush/30 group-hover:border-rose/40 transition-colors duration-300">
        <p className="font-sans text-xs text-rose-deep font-medium tracking-wide">
          ✦ {service.benefit}
        </p>
      </div>
    </motion.article>
  )
}
