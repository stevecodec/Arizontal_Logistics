
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      'display': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      'mono': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'monospace'],
    },
    extend: {
      fontWeight: {
        'thin': '300',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      colors: {
        'theme': {
          'primary': '#007AFF',
          'secondary': '#d48634',
          'light': '#B4E1FF',
          'dark': '#0066CC',
          'darker': '#0052A3',
          'bg-light': '#E0F2FF',
          'bg-lighter': '#F0F8FF',
          'footer': '#0A1F3A',
        },
      },
      keyframes: {
        'sparkle-1': {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1.5)' },
        },
        'sparkle-2': {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.3) rotate(180deg)' },
        },
        'sparkle-3': {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '60%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'sparkle-4': {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '40%': { opacity: '1', transform: 'scale(1.4) rotate(-90deg)' },
        },
        'sparkle-5': {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '55%': { opacity: '1', transform: 'scale(1.6)' },
        },
        'sparkle-6': {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '45%': { opacity: '1', transform: 'scale(1.3) rotate(90deg)' },
        },
      },
      animation: {
        'sparkle-1': 'sparkle-1 1.2s ease-in-out',
        'sparkle-2': 'sparkle-2 1.4s ease-in-out 0.1s',
        'sparkle-3': 'sparkle-3 1.3s ease-in-out 0.2s',
        'sparkle-4': 'sparkle-4 1.5s ease-in-out 0.15s',
        'sparkle-5': 'sparkle-5 1.4s ease-in-out 0.3s',
        'sparkle-6': 'sparkle-6 1.6s ease-in-out 0.25s',
      },
    },
  },
  plugins: [],
} satisfies Config
