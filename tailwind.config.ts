import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c7',
          300: '#a0b5a0',
          400: '#7a957a',
          500: '#5f7d5f',
          600: '#4a624a',
          700: '#3d4f3d',
          800: '#334133',
          900: '#2b362b',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf9f6',
          200: '#f5f1e8',
          300: '#ede7d9',
          400: '#e3d9c5',
          500: '#d4c5a9',
          600: '#c4ad8b',
          700: '#a88f6f',
          800: '#8a755c',
          900: '#71614e',
        },
        gold: {
          50: '#faf8f0',
          100: '#f4eed9',
          200: '#e8dab3',
          300: '#dac083',
          400: '#d4af37',
          500: '#b8942e',
          600: '#9d7a27',
          700: '#7e5f23',
          800: '#6a4f23',
          900: '#5a4221',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
