import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted Google Fonts via @fontsource — uniquement subset latin (RGPD + perf)
import '@fontsource/caveat/latin-400.css'
import '@fontsource/caveat/latin-500.css'
import '@fontsource/caveat/latin-600.css'
import '@fontsource/caveat/latin-700.css'
import '@fontsource/crimson-pro/latin-300.css'
import '@fontsource/crimson-pro/latin-400.css'
import '@fontsource/crimson-pro/latin-500.css'
import '@fontsource/crimson-pro/latin-600.css'
import '@fontsource/crimson-pro/latin-400-italic.css'
import '@fontsource/quicksand/latin-300.css'
import '@fontsource/quicksand/latin-400.css'
import '@fontsource/quicksand/latin-500.css'
import '@fontsource/quicksand/latin-600.css'
import '@fontsource/quicksand/latin-700.css'

import './styles/globals.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
