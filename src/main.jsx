import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// TailwindCSS was not rendering as well as not giving any errors.
// Finally rectified it using this article:
// https://medium.com/@parkdong1015/tailwindcss-not-working-with-react-but-finally-fix-it-dc2ce63015d0
