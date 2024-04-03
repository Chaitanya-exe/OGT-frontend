import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import GlobalState from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
  <GlobalState>
    <App />

  </GlobalState>

  </BrowserRouter>
  // </React.StrictMode>,
)
