import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (served from our own domain, no Google Fonts request)
import '@fontsource-variable/inter'
import '@fontsource-variable/big-shoulders-display'
// Brush script for the header wordmark, close to the lettering in the logo
import '@fontsource/mr-dafoe/latin-400.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
