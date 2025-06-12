import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context_api from './Context_api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context_api>
      <App />
    </Context_api>
  </StrictMode>,
)
