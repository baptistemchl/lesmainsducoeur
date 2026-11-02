import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts'
import './styles/globals.css'
import ServicePage from './pages/ServicePage'

// Chaque page /soins/<id>/ porte l'identifiant du soin sur #root (voir scripts/generate-service-pages.mjs)
const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <ServicePage id={root.dataset.service ?? ''} />
  </StrictMode>
)
