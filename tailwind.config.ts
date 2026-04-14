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
          deep: '#A67068',
          light: '#DDB8B4',
          muted: '#E8CBC7',
        },
        sage: {
          DEFAULT: '#A8B5A2',
          light: '#D4DDD0',
          pale: '#ECF0EA',
          deep: '#7A9472',
        },
        gold: {
          DEFAULT: '#D4B896',
          soft: '#E8D5BD',
          pale: '#F5EBE0',
        },
        warm: {
          900: '#3D3530',
          800: '#574E48',
          700: '#7A6E69',
          500: '#A09590',
          300: '#C8C0BC',
          100: '#F8F4F0',
          50: '#FFFDF9',
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(61, 53, 48, 0.06), 0 1px 4px rgba(61, 53, 48, 0.04)',
        'card-hover': '0 12px 48px rgba(61, 53, 48, 0.10), 0 2px 8px rgba(61, 53, 48, 0.06)',
        soft: '0 8px 40px rgba(201, 148, 138, 0.12)',
        halo: '0 0 80px rgba(242, 214, 211, 0.5)',
        header: '0 1px 24px rgba(61, 53, 48, 0.06)',
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
    },
  },
  plugins: [],
}

export default config
