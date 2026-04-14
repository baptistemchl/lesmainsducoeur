import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "../../lib/animations"

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`${centered ? "text-center" : ""} ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {label && (
        <motion.p variants={fadeInUp} className="section-label mb-3">
          {label}
        </motion.p>
      )}
      <motion.h2 variants={fadeInUp} className="section-title mb-4">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`section-subtitle ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
