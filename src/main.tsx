import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Content from './sections/Content-Wrapper'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Content />
  </StrictMode>,
)
