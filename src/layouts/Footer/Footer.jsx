import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='imgContainer'>
        <img src="src\assets\logo.png" alt="logo" className='logoImg'/>
      </div>
      <p>© 2023 PlanetaSensorial. Todos los derechos reservados</p>
      <nav>
        <a href="https://www.facebook.com/planetasensorialcr?mibextid=ZbWKwL" target='__blank'><img src="src\assets\Facebook_Logo.png" alt="" className='redesImg'/></a>
        <a href="https://instagram.com/planetasensorialcr?igshid=MTNiYzNiMzkwZA==" target='__blank'><img src="src\assets\instagram-logo.png" alt="" className='redesImg'/></a>
        <a href="https://api.whatsapp.com/send?phone=50672438091" target='__blank'><img src="src\assets\whatsapp-logo.png" alt="" className='redesImg'/></a>
      </nav>
    </footer>
  )
}

export default Footer;