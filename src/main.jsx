import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Spidal from './components/Spidal';
import Brands from './pages/Brands.jsx';
import Contact from './components/Contact.jsx'
import Lg from './pages/Lg.jsx'
import White from './pages/White.jsx'
import Samsung from './pages/Samsung.jsx'
import Kiriazi from './pages/Kiriazi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lg" element={<Lg />} />
        <Route path="/white" element={<White />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/kiriazi" element={<Kiriazi />} />
      </Routes>
    </BrowserRouter>
    <Spidal />
    <Footer />
  </React.StrictMode>,
)
