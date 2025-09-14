import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        noto: ['Noto Sans Display', 'sans-serif'], 
      },
    },
  },
})
