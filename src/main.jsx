// importo StrictMode di React - Martina
import { StrictMode } from 'react'

// importo createRoot per montare l'app nel DOM - Martina
import { createRoot } from 'react-dom/client'

// importo il Provider di Redux - Martina
import { Provider } from 'react-redux'

// importo lo store Redux che abbiamo creato - Martina
import store from './redux/store'

// importo il CSS globale - Martina
import './index.css'

// importo il componente principale - Martina
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider rende Redux disponibile in tutta l'app */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)