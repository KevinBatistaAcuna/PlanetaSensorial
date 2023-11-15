import {React, useState} from 'react'
import './App.css'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
// import BodyContent from './components/BodyContent/BodyContent'
// import Nosotros from './pages/Nosotros/Nosotros'
import Contact from './pages/Nosotros/contact/Contact'

function App() {

  return (
    <>
      <Header/>
      <Contact/>
      {/* <Nosotros/> */}
      {/* <BodyContent/> */}
      <Footer/>
    </>
  )
}

export default App
