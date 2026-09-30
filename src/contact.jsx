import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EnquiryFormPage from './pages/EnquiryFormPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EnquiryFormPage />
  </StrictMode>,
)
