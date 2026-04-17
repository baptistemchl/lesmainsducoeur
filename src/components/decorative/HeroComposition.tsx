import { motion } from 'framer-motion'

export function HeroComposition() {
  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center">
      {/* Mandala principal — rotation lente */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 480 480"
          className="w-full max-w-[480px] h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="halo-fuchsia" cx="45%" cy="42%" r="55%">
              <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F9A8D4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E84393" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="halo-orchid" cx="60%" cy="55%" r="50%">
              <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="halo-amber" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="petal-pink" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1493" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E84393" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="petal-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="petal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.1" />
            </linearGradient>
            <filter id="blur-soft">
              <feGaussianBlur stdDeviation="12" />
            </filter>
            <filter id="blur-glow">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          {/* Halos de fond */}
          <circle cx="240" cy="240" r="220" fill="url(#halo-fuchsia)" filter="url(#blur-soft)" />
          <circle cx="290" cy="200" r="160" fill="url(#halo-orchid)" filter="url(#blur-soft)" />
          <circle cx="190" cy="280" r="130" fill="url(#halo-amber)" filter="url(#blur-soft)" />

          {/* Cercle central lumineux */}
          <circle cx="240" cy="240" r="150" fill="white" fillOpacity="0.7" />

          {/* Anneau mandala externe */}
          <circle cx="240" cy="240" r="185" stroke="url(#petal-pink)" strokeWidth="1" fill="none" strokeDasharray="4 8" />

          {/* Anneau intermédiaire */}
          <circle cx="240" cy="240" r="165" stroke="#8B5CF6" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />

          {/* Lotus petals — couche externe (8 pétales) */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={`outer-${angle}`}
              cx="240"
              cy="120"
              rx="18"
              ry="55"
              fill={i % 3 === 0 ? 'url(#petal-pink)' : i % 3 === 1 ? 'url(#petal-purple)' : 'url(#petal-gold)'}
              transform={`rotate(${angle} 240 240)`}
            />
          ))}

          {/* Lotus petals — couche interne (6 pétales) */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse
              key={`inner-${angle}`}
              cx="240"
              cy="160"
              rx="14"
              ry="38"
              fill={i % 2 === 0 ? '#E84393' : '#8B5CF6'}
              fillOpacity="0.25"
              transform={`rotate(${angle} 240 240)`}
            />
          ))}

          {/* Centre lumineux */}
          <circle cx="240" cy="240" r="42" fill="white" fillOpacity="0.95" />
          <circle cx="240" cy="240" r="32" fill="white" filter="url(#blur-glow)" />

          {/* Symbole Om stylisé au centre */}
          <g transform="translate(225, 225)" opacity="0.6">
            <path
              d="M15 18c-5 0-8-3-8-7s3-7 8-7c3 0 5 1 7 3"
              stroke="#E84393"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M22 7c2-2 5-3 7-2 3 1 4 5 1 8-2 2-5 4-8 5"
              stroke="#8B5CF6"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="27" cy="2" r="1.5" fill="#F59E0B" />
          </g>

          {/* Sparkle points */}
          <g fill="#E84393" fillOpacity="0.6">
            <circle cx="95" cy="140" r="3" />
            <circle cx="380" cy="165" r="2.5" />
            <circle cx="360" cy="340" r="3.5" />
            <circle cx="115" cy="325" r="2.5" />
            <circle cx="185" cy="82" r="2" />
            <circle cx="310" cy="78" r="2.5" />
          </g>
          <g fill="#8B5CF6" fillOpacity="0.5">
            <circle cx="72" cy="240" r="2" />
            <circle cx="410" cy="250" r="2.5" />
            <circle cx="240" cy="60" r="2" />
            <circle cx="240" cy="415" r="2.5" />
          </g>
          <g fill="#F59E0B" fillOpacity="0.45">
            <circle cx="130" cy="200" r="1.8" />
            <circle cx="345" cy="285" r="2" />
            <circle cx="160" cy="370" r="1.5" />
            <circle cx="320" cy="115" r="1.8" />
          </g>

          {/* Lignes de flux énergétique */}
          <path
            d="M150 150 Q200 180 240 195 Q280 210 330 180"
            stroke="#E84393"
            strokeWidth="0.8"
            strokeOpacity="0.25"
            fill="none"
          />
          <path
            d="M150 330 Q200 300 240 285 Q280 270 330 300"
            stroke="#8B5CF6"
            strokeWidth="0.8"
            strokeOpacity="0.2"
            fill="none"
          />

          {/* Anneau externe doré */}
          <circle
            cx="240"
            cy="240"
            r="210"
            stroke="#F59E0B"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            fill="none"
            strokeDasharray="2 10"
          />
        </svg>
      </motion.div>

      {/* Anneau en rotation lente */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 480 480" className="w-full max-w-[480px] h-auto opacity-30" fill="none">
          <circle cx="240" cy="240" r="195" stroke="#E84393" strokeWidth="0.8" strokeDasharray="6 12 2 8" />
          {/* Petits diamants sur l'orbite */}
          {[0, 72, 144, 216, 288].map((angle) => (
            <circle
              key={angle}
              cx="240"
              cy="45"
              r="3"
              fill="#E84393"
              fillOpacity="0.5"
              transform={`rotate(${angle} 240 240)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Anneau en rotation inverse */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 480 480" className="w-full max-w-[480px] h-auto opacity-20" fill="none">
          <circle cx="240" cy="240" r="225" stroke="#8B5CF6" strokeWidth="0.6" strokeDasharray="3 15" />
          {[0, 90, 180, 270].map((angle) => (
            <circle
              key={angle}
              cx="240"
              cy="15"
              r="2.5"
              fill="#8B5CF6"
              fillOpacity="0.6"
              transform={`rotate(${angle} 240 240)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Orbe fuchsia flottant */}
      <motion.div
        className="absolute -top-8 -right-8 w-44 h-44 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(232,67,147,0.3) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Orbe violet en bas gauche */}
      <motion.div
        className="absolute -bottom-4 -left-8 w-36 h-36 rounded-full blur-xl"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      />

      {/* Orbe doré */}
      <motion.div
        className="absolute top-1/4 -left-4 w-28 h-28 rounded-full blur-xl"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
    </div>
  )
}
