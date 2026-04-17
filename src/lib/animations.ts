import type { Variants } from 'framer-motion'

/* ── Standard entrances ── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 80, damping: 14 },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 100, damping: 12 },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 70, damping: 14 },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 70, damping: 14 },
  },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, type: 'spring', stiffness: 200, damping: 12 },
  },
}

/* ── Yoga / Meditation entrances ── */

/** Lotus bloom — rotate + scale from center */
export const lotusBloom: Variants = {
  hidden: { opacity: 0, scale: 0.3, rotate: -90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, type: 'spring', stiffness: 60, damping: 12 },
  },
}

/** Spiral in — rotation + scale for dramatic entrance */
export const spiralIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, type: 'spring', stiffness: 80, damping: 14 },
  },
}

/** Flip in — 3D perspective flip */
export const flipIn: Variants = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.9 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.6, type: 'spring', stiffness: 80, damping: 12 },
  },
}

/** Bounce in — elastic entrance */
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3, y: 60 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 300, damping: 15 },
  },
}

/** Zen reveal — gentle expansion from center */
export const zenReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Wave stagger — for parent containers with wave-like delays */
export const waveStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

/** Float up with rotation — playful entrance */
export const floatUpRotate: Variants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 80, damping: 12 },
  },
}

/** Slide up with glow — for contact/CTA sections */
export const glowReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}
