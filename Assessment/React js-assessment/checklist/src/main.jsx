import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Checklist from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Checklist />
  </StrictMode>,
)
