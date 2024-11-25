
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LayoutWrapper } from './Layout/StyledLayout.js'



createRoot(document.getElementById('root')).render(
  <>
  <LayoutWrapper/>
    <App />
  </>,
)
