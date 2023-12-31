import {React} from 'react'
import './App.css'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from './pages/Nosotros/Nosotros'
import BodyContent from './components/BodyContent/BodyContent';
import Contacto from './pages/Contacto/Contacto';
import Servicios from './pages/Servicios/Servicios';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<BodyContent />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/terapiaFisica" element={<Servicios />} />
          <Route path="/terapiaOcupacional" element={<Servicios />} />
          <Route path="/terapiaLenguaje" element={<Servicios />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
