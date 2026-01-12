
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
    },
  },
  plugins: [],
} satisfies Config
