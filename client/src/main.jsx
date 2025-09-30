import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopcontextProvider from './context/ShopContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
<ShopcontextProvider>
<App/>
</ShopcontextProvider>
</AuthProvider>
  </BrowserRouter>
)
