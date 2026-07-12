import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PWAWrapper from './PWAWrapper.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { APP_VERSION, APP_BUILD_TIME, APP_COMMIT } from './lib/appVersion.js'
import './index.css'

if (typeof console !== 'undefined') {
  console.info(`PNLQ v${APP_VERSION} · build ${APP_BUILD_TIME} · commit ${APP_COMMIT}`)
}

// Un ErrorBoundary de React solo captura errores de render/lifecycle, NO
// promesas rechazadas sin `catch` (código async, listeners, etc.). Se deja
// un registro visible en consola local (nunca se envía a un servidor, no
// hay endpoint de telemetría) para que un fallo silencioso no desaparezca
// sin rastro durante soporte técnico.
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Promesa rechazada sin manejar:', event.reason)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PWAWrapper>
        <App />
      </PWAWrapper>
    </ThemeProvider>
  </React.StrictMode>,
)
