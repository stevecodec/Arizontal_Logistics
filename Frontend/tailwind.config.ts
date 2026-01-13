
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Realtime Text', 'sans-serif'],
        'body': ['Realtime Text', 'sans-serif'],
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
