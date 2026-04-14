import { motion } from 'framer-motion'

export function HeroComposition() {
  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center">
      {/* Halo principal — flotte doucement */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ y: [-12, 12, -12], rotate: [0, 3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 480 480"
          className="w-full max-w-[480px] h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="halo-main" cx="45%" cy="42%" r="55%">
              <stop offset="0%" stopColor="#F2D6D3" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#E8C4BF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C9948A" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="halo-sage" cx="60%" cy="55%" r="50%">
              <stop offset="0%" stopColor="#D4DDD0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#A8B5A2" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="halo-gold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E8D5BD" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4B896" stopOpacity="0" />
            </radialGradient>
            <filter id="blur-soft">
              <feGaussianBlur stdDeviation="12" />
            </filter>
            <filter id="blur-light">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          {/* Halos de fond */}
          <circle cx="240" cy="240" r="210" fill="url(#halo-main)" filter="url(#blur-soft)" />
          <circle cx="280" cy="210" r="160" fill="url(#halo-sage)" filter="url(#blur-soft)" />
          <circle cx="200" cy="270" r="120" fill="url(#halo-gold)" filter="url(#blur-soft)" />

          {/* Cercle principal ivoire */}
          <circle cx="240" cy="240" r="155" fill="#FAF7F2" fillOpacity="0.85" />

          {/* Arc ornemental externe */}
          <circle
            cx="240"
            cy="240"
            r="170"
            stroke="#C9948A"
            strokeWidth="0.6"
            strokeOpacity="0.25"
            fill="none"
            strokeDasharray="8 6"
          />

          {/* Cercle intermédiaire */}
          <circle
            cx="240"
            cy="240"
            r="128"
            stroke="#A8B5A2"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            fill="none"
          />

          {/* Formes pétales abstraites */}
          <ellipse
            cx="240"
            cy="130"
            rx="22"
            ry="52"
            fill="#F2D6D3"
            fillOpacity="0.45"
            transform="rotate(0 240 240)"
          />
          <ellipse
            cx="240"
            cy="130"
            rx="22"
            ry="52"
            fill="#F2D6D3"
            fillOpacity="0.35"
            transform="rotate(60 240 240)"
          />
          <ellipse
            cx="240"
            cy="130"
            rx="22"
            ry="52"
            fill="#D4DDD0"
            fillOpacity="0.35"
            transform="rotate(120 240 240)"
          />
          <ellipse
            cx="240"
            cy="130"
            rx="22"
            ry="52"
            fill="#F2D6D3"
            fillOpacity="0.3"
            transform="rotate(180 240 240)"
          />
          <ellipse
            cx="240"
            cy="130"
            rx="22"
            ry="52"
            fill="#D4DDD0"
            fillOpacity="0.3"
            transform="rotate(240 240 240)"
          />
          <ellipse
            cx="240"
            cy="130"
            rx="22"
            ry="52"
            fill="#E8D5BD"
            fillOpacity="0.3"
            transform="rotate(300 240 240)"
          />

          {/* Centre lumineux */}
          <circle cx="240" cy="240" r="38" fill="white" fillOpacity="0.9" />
          <circle cx="240" cy="240" r="28" fill="white" fillOpacity="0.95" filter="url(#blur-light)" />

          {/* Symbole cœur stylisé au centre */}
          <path
            d="M240 256 C240 256 220 244 220 232 C220 224 228 218 236 222 C238 223 240 225 240 225 C240 225 242 223 244 222 C252 218 260 224 260 232 C260 244 240 256 240 256Z"
            fill="#C9948A"
            fillOpacity="0.55"
          />

          {/* Étoiles / étincelles décoratives */}
          <g fill="#C9948A" fillOpacity="0.5">
            <circle cx="104" cy="148" r="2.5" />
            <circle cx="370" cy="170" r="2" />
            <circle cx="352" cy="335" r="3" />
            <circle cx="122" cy="318" r="2" />
            <circle cx="195" cy="90" r="1.5" />
            <circle cx="305" cy="82" r="2" />
          </g>
          <g fill="#A8B5A2" fillOpacity="0.45">
            <circle cx="78" cy="240" r="1.8" />
            <circle cx="402" cy="255" r="2.2" />
            <circle cx="240" cy="68" r="1.5" />
            <circle cx="240" cy="408" r="2" />
          </g>

          {/* Lignes botaniques fines */}
          <path
            d="M155 155 Q200 185 240 200 Q280 215 325 185"
            stroke="#A8B5A2"
            strokeWidth="0.6"
            strokeOpacity="0.3"
            fill="none"
          />
          <path
            d="M155 325 Q200 295 240 280 Q280 265 325 295"
            stroke="#C9948A"
            strokeWidth="0.6"
            strokeOpacity="0.25"
            fill="none"
          />

          {/* Arc décoratif externe supplémentaire */}
          <circle
            cx="240"
            cy="240"
            r="200"
            stroke="#D4B896"
            strokeWidth="0.4"
            strokeOpacity="0.15"
            fill="none"
            strokeDasharray="3 9"
          />
        </svg>
      </motion.div>

      {/* Orbe sage flottant en arrière-plan */}
      <motion.div
        className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-sage-light/30 blur-2xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Orbe rose en bas gauche */}
      <motion.div
        className="absolute -bottom-4 -left-8 w-32 h-32 rounded-full bg-blush/40 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      />
    </div>
  )
}
