import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './sections/Intro'
import Content from './sections/Content-Wrapper'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Content />
  </StrictMode>,
)
