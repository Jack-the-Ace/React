import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageRouter from './router/PageRouter'
import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageRouter></PageRouter>    
  </StrictMode>,
)
