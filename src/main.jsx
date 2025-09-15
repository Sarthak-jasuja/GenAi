import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SmoothCursor } from './components/ui/smooth-cursor'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SmoothCursor />
    <App />
  </BrowserRouter>
)
