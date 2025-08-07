import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { CartProvider } from './context/CartProvider'
import { ProductProvider } from './context/ProductProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
)