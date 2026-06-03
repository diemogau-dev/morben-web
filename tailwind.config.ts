import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        carbon: '#0E0E10',
        surface: '#1C1C1E',
        card: '#282828',
        border: '#2A2A2D',
        offwhite: '#F5F5F5',
        muted: '#A0A0A4',
        hint: '#5B5B5B',
        orange: {
          DEFAULT: '#FF5722',
          light: '#FF7E55',
          deep: '#EE3900',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
