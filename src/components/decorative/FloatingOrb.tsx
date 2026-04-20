interface FloatingOrbProps {
  size?: number
  color?: 'rose' | 'sage' | 'gold'
  opacity?: number
  className?: string
}

const colorMap = {
  rose: ['#F9E7E7', '#D36969'],
  sage: ['#C4B5FD', '#8B5CF6'],
  gold: ['#FDE68A', '#F59E0B'],
}

export function FloatingOrb({
  size = 300,
  color = 'rose',
  opacity = 0.35,
  className = '',
}: FloatingOrbProps) {
  const [c1, c2] = colorMap[color]
  const id = `orb-${color}-${size}`

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={id} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor={c1} stopOpacity={opacity * 1.4} />
          <stop offset="60%" stopColor={c2} stopOpacity={opacity * 0.6} />
          <stop offset="100%" stopColor={c2} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#${id})`} />
    </svg>
  )
}
