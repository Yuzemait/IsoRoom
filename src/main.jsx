import React from 'react'
import ReactDom from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Catalog from './views/Catalog.jsx'
import Showroom from './views/Showroom.jsx'
import Cart from './views/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/catalog',
    element: <Catalog />
  },
  {
    path: '/showroom',
    element: <Showroom />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
