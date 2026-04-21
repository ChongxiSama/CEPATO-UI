import type { Config } from 'tailwindcss'

const preset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        lt: {
          bg: '#EDE6D6',
          surface: '#E4DCC8',
          border: '#C8BFA8',
          ink: '#1A1814',
          muted: '#6B6456',
          ghost: '#A89F90',
          accent: '#D4621A',
        },
        rl: {
          teal: '#4B8D9E',
          gold: '#C29145',
          red: '#A33332',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        cn: ['var(--font-cn)', 'sans-serif'],
      },
      animation: {
        'enter': 'enter 400ms ease-out forwards',
      },
      keyframes: {
        enter: {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  }
}

export default preset
