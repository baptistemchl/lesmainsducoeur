import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: {
          DEFAULT: '#FAF7F2',
          dark: '#F0E8DC',
        },
        cream: {
          DEFAULT: '#F5EFE6',
          soft: '#EDE3D5',
        },
        blush: {
          DEFAULT: '#F2D6D3',
          deep: '#E8C4BF',
          pale: '#FAF0EE',
        },
        rose: {
          DEFAULT: '#C9948A',
          deep: '#B5726A',
          light: '#DDB8B4',
          muted: '#E8CBC7',
          vibrant: '#D4736A',
        },
        sage: {
          DEFAULT: '#A8B5A2',
          light: '#D4DDD0',
          pale: '#ECF0EA',
          deep: '#6E9464',
          vibrant: '#7BAF6E',
        },
        gold: {
          DEFAULT: '#D4B896',
          soft: '#E8D5BD',
          pale: '#F5EBE0',
          warm: '#C8A050',
        },
        warm: {
          900: '#3D3530',
          800: '#574E48',
          700: '#7A6E69',
          600: '#8F847F',
          500: '#A09590',
          400: '#B5ACA8',
          300: '#C8C0BC',
          200: '#DDD7D4',
          100: '#F8F4F0',
          50: '#FFFDF9',
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(61, 53, 48, 0.06), 0 1px 4px rgba(61, 53, 48, 0.04)',
        'card-hover': '0 16px 48px rgba(61, 53, 48, 0.12), 0 4px 12px rgba(61, 53, 48, 0.08)',
        soft: '0 8px 40px rgba(201, 148, 138, 0.15)',
        halo: '0 0 80px rgba(242, 214, 211, 0.5)',
        header: '0 1px 24px rgba(61, 53, 48, 0.06)',
        glow: '0 0 30px rgba(201, 148, 138, 0.25)',
        'glow-sage': '0 0 30px rgba(110, 148, 100, 0.2)',
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
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
      },
    },
  },
  plugins: [],
}

export default config
