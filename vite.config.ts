import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Une page HTML par URL : /, /ateliers/ et /soins/<id>/ (générées par scripts/generate-service-pages.mjs)
      input: {
        main: resolve(__dirname, 'index.html'),
        ateliers: resolve(__dirname, 'ateliers/index.html'),
        ...Object.fromEntries(
          readdirSync(resolve(__dirname, 'soins')).map((id) => [`soin-${id}`, resolve(__dirname, 'soins', id, 'index.html')]),
        ),
      },
    },
  },
})
