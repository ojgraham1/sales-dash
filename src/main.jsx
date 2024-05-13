import React from 'react'
import ReactDOM from 'react-dom/client'
import Orders from '../components/Charts.jsx'
import Sidebar from '../components/Sidebar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar/>
    <Orders/>
  </React.StrictMode>,
)
