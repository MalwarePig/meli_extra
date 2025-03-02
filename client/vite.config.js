import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Cambia este valor al puerto que desees
  },
  plugins: [react()],
})
