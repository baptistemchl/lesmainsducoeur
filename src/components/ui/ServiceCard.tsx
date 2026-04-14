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
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="card p-7 lg:p-8 flex flex-col gap-4 group cursor-default"
    >
      <div className="flex items-center justify-between">
        <span
          className="text-2xl text-rose/60 group-hover:text-rose transition-colors duration-300"
          aria-hidden="true"
        >
          {service.icon}
        </span>
        {service.duration && (
          <span className="font-sans text-xs text-warm-500 bg-cream px-3 py-1 rounded-full">
            {service.duration}
          </span>
        )}
      </div>

      <h3 className="font-cormorant text-2xl font-medium text-warm-900 leading-tight">
        {service.name}
      </h3>

      <p className="font-sans text-warm-700 text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      <div className="pt-3 border-t border-blush/30">
        <p className="font-sans text-xs text-rose font-medium tracking-wide">
          ✦ {service.benefit}
        </p>
      </div>
    </motion.article>
  )
}
