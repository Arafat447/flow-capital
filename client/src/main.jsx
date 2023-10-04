import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8000/api/'
// axios.defaults.baseURL = 'http://dev.shelleyglobal.com/server/public/api/'
axios.defaults.baseURL = 'https://shelleyglobal.com/server/public/api/'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
