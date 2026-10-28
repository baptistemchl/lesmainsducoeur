import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Une page HTML par URL : / et /ateliers/
      input: {
        main: resolve(__dirname, 'index.html'),
        ateliers: resolve(__dirname, 'ateliers/index.html'),
      },
    },
  },
})
