import { motion } from 'framer-motion'

export function HeroComposition() {
  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center">
      {/* ── Halos colorés en arrière-plan (famille rose & marron-rosé) ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(239,184,184,0.5) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.85, 0.65] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-[260px] h-[260px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.45) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, 15, 0], y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[260px] h-[260px] rounded-full pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(236,213,200,0.55) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute top-0 right-8 w-[200px] h-[200px] rounded-full pointer-events-none blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(220,186,186,0.50) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* ── Anneau pointillé extérieur (rotation lente, rose) ────────── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 480 480" className="w-full max-w-[460px] h-auto" fill="none" aria-hidden="true">
          <circle cx="240" cy="240" r="220" stroke="#D36969" strokeWidth="0.7" strokeDasharray="3 9" strokeOpacity="0.32" />
          <circle cx="240" cy="20" r="3" fill="#D36969" fillOpacity="0.55" />
        </svg>
      </motion.div>

      {/* ── Anneau intérieur subtil (rotation inverse, marron-rosé) ───── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 480 480" className="w-full max-w-[380px] h-auto" fill="none" aria-hidden="true">
          <circle cx="240" cy="240" r="180" stroke="#9E2E2E" strokeWidth="0.6" strokeDasharray="1 8" strokeOpacity="0.4" />
          <circle cx="240" cy="60" r="2.5" fill="#9E2E2E" fillOpacity="0.55" />
        </svg>
      </motion.div>

      {/* ── Petites étoiles & motifs décoratifs (palette rose & marron) ─ */}
      <motion.svg
        viewBox="0 0 480 480"
        className="absolute inset-0 w-full max-w-[480px] h-auto pointer-events-none"
        fill="none"
        aria-hidden="true"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Petites étoiles rose vif */}
        <g fill="#D36969" fillOpacity="0.55">
          <circle cx="80" cy="120" r="2.5" />
          <circle cx="400" cy="160" r="2" />
          <circle cx="100" cy="340" r="2" />
          <circle cx="380" cy="320" r="2" />
        </g>
        {/* Petites étoiles marron-rosé */}
        <g fill="#9E2E2E" fillOpacity="0.45">
          <circle cx="60" cy="240" r="2" />
          <circle cx="420" cy="250" r="2.2" />
          <circle cx="240" cy="50" r="2" />
        </g>
        {/* Petites étoiles rose pâle / blush */}
        <g fill="#EFB8B8" fillOpacity="0.65">
          <circle cx="130" cy="80" r="2" />
          <circle cx="350" cy="80" r="1.8" />
          <circle cx="160" cy="410" r="2" />
          <circle cx="320" cy="410" r="2.2" />
        </g>

        {/* Petits brins floraux stylisés (rose & marron pâle) */}
        <g strokeWidth="1.2" strokeOpacity="0.5" fill="none" strokeLinecap="round">
          {/* Brin haut-gauche */}
          <path d="M70 90 q8 -10 18 -4 q-2 12 -18 4 z" fill="#EFB8B8" fillOpacity="0.4" stroke="#C23D3D" strokeOpacity="0.4" />
          {/* Brin bas-droit */}
          <path d="M395 380 q-8 -10 -18 -4 q2 12 18 4 z" fill="#EFB8B8" fillOpacity="0.4" stroke="#C23D3D" strokeOpacity="0.4" />
          {/* Petites pétales gauche */}
          <ellipse cx="36" cy="287" rx="3.5" ry="1.5" fill="#ECD5C8" fillOpacity="0.6" stroke="#9E2E2E" strokeOpacity="0.3" transform="rotate(35 36 287)" />
          <ellipse cx="44" cy="295" rx="3.5" ry="1.5" fill="#ECD5C8" fillOpacity="0.6" stroke="#9E2E2E" strokeOpacity="0.3" transform="rotate(35 44 295)" />
          {/* Petites pétales droite */}
          <ellipse cx="444" cy="207" rx="3.5" ry="1.5" fill="#ECD5C8" fillOpacity="0.6" stroke="#9E2E2E" strokeOpacity="0.3" transform="rotate(-35 444 207)" />
          <ellipse cx="436" cy="215" rx="3.5" ry="1.5" fill="#ECD5C8" fillOpacity="0.6" stroke="#9E2E2E" strokeOpacity="0.3" transform="rotate(-35 436 215)" />
        </g>
      </motion.svg>

      {/* ── Logo central ─────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.img
          src="/images/logo-dark.svg"
          alt="Les Mains du Cœur"
          className="w-[280px] h-auto lg:w-[340px]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          style={{ filter: 'drop-shadow(0 10px 30px rgba(158, 46, 46, 0.25))' }}
        />
      </motion.div>
    </div>
  )
}
