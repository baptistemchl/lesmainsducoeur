import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts'
import './styles/globals.css'
import AteliersPage from './pages/AteliersPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AteliersPage />
  </StrictMode>
)
