import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Crimson Pro"', 'Georgia', 'serif'],
        hand: ['"Caveat"', 'cursive'],
        sans: ['"Quicksand"', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* ── Girly Pinks / Fuchsia ── */
        rose: {
          DEFAULT: '#E84393',
          deep: '#C2185B',
          light: '#FD79A8',
          muted: '#FDCFE8',
          vibrant: '#FF1493',
        },
        /* ── Meditation Purples ── */
        sage: {
          DEFAULT: '#A78BFA',
          light: '#C4B5FD',
          pale: '#EDE9FE',
          deep: '#7C3AED',
          vibrant: '#8B5CF6',
        },
        /* ── Yoga Gold / Amber ── */
        gold: {
          DEFAULT: '#F59E0B',
          soft: '#FDE68A',
          pale: '#FEF3C7',
          warm: '#F97316',
        },
        /* ── Coral Accent ── */
        coral: {
          DEFAULT: '#FB7185',
          deep: '#F43F5E',
          light: '#FECDD3',
        },
        /* ── Main Backgrounds ── */
        ivory: {
          DEFAULT: '#FDF2F8',
          dark: '#FCE7F3',
        },
        cream: {
          DEFAULT: '#FAF5FF',
          soft: '#F3E8FF',
        },
        blush: {
          DEFAULT: '#FBCFE8',
          deep: '#F9A8D4',
          pale: '#FDF2F8',
        },
        /* ── Deep Tones (text & dark sections) ── */
        warm: {
          900: '#2D1B4E',
          800: '#3B1F65',
          700: '#6B5B8A',
          600: '#8B7BA8',
          500: '#A99BC4',
          400: '#C4B5E0',
          300: '#D8CCF0',
          200: '#E8E0F5',
          100: '#F5F0FF',
          50: '#FDFAFF',
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(168, 85, 247, 0.08), 0 1px 4px rgba(168, 85, 247, 0.04)',
        'card-hover': '0 20px 60px rgba(232, 67, 147, 0.15), 0 8px 16px rgba(139, 92, 246, 0.1)',
        soft: '0 8px 40px rgba(232, 67, 147, 0.18)',
        halo: '0 0 80px rgba(251, 207, 232, 0.6)',
        header: '0 1px 24px rgba(124, 58, 237, 0.08)',
        glow: '0 0 40px rgba(232, 67, 147, 0.35)',
        'glow-sage': '0 0 40px rgba(139, 92, 246, 0.25)',
        'glow-gold': '0 0 30px rgba(245, 158, 11, 0.25)',
        neon: '0 0 15px rgba(255, 20, 147, 0.4), 0 0 45px rgba(139, 92, 246, 0.2)',
        glass: '0 8px 32px rgba(31, 38, 135, 0.15)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      letterSpacing: {
        widest: '0.25em',
      },
      lineHeight: {
        relaxed: '1.75',
        loose: '2',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 100%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 0%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.08)', opacity: '0.9' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232,67,147,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(232,67,147,0.5), 0 0 80px rgba(139,92,246,0.2)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        aurora: 'aurora 15s ease infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        'spin-reverse': 'spin-reverse 25s linear infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
