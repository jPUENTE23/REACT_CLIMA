import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { WatherApp } from './WatherApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatherApp />
  </StrictMode>,
)
