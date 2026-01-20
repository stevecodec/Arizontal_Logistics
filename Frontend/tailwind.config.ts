
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
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
          'secondary': '#46AFFF',
          'light': '#B4E1FF',
          'dark': '#0066CC',
          'darker': '#0052A3',
          'bg-light': '#E0F2FF',
          'bg-lighter': '#F0F8FF',
          'footer': '#0A1F3A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
