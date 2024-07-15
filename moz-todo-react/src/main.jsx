import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import Suplementos from './components/pages/Suplementos/Suplementos.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/suplementos",
    element:<Suplementos/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
2