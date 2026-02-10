import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CounterApp/', // needed for GitHub Pages
  plugins: [
    react() // no extra babel plugin needed
  ],
})
