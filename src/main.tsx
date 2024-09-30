import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'


const EstilosGlobais = createGlobalStyle`
  body {
    margin: 0;
  }
`


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EstilosGlobais/>
    <App/>
  </StrictMode>,
)
