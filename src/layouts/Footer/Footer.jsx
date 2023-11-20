import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import face from '../../assets/Facebook_Logo.png'
import insta from '../../assets/instagram-logo.png'
import whatsapp from '../../assets/whatsapp-logo.png'

function Footer() {
  return (
    <footer>
      <div className='imgContainer'>
        <img src={logo} alt="logo" className='logoImg'/>
      </div>
      <p>© 2023 PlanetaSensorial. Todos los derechos reservados</p>
      <nav>
        <a href="https://www.facebook.com/planetasensorialcr?mibextid=ZbWKwL" target='__blank'><img src={face} alt="" className='redesImg'/></a>
        <a href="https://instagram.com/planetasensorialcr?igshid=MTNiYzNiMzkwZA==" target='__blank'><img src={insta} alt="" className='redesImg'/></a>
        <a href="https://api.whatsapp.com/send?phone=50672438091" target='__blank'><img src={whatsapp} alt="" className='redesImg'/></a>
      </nav>
    </footer>
  )
}

export default Footer;