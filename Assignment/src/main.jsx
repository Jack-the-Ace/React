import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyRouter from './MyRouter'

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyRouter></MyRouter>
  </StrictMode>,
)
