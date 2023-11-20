import {React, useState, useRef} from 'react'
import './ContactNumber.css'

export default function ContactNumbers() {
  return (
    <section className='sectionNums'>
      <div className='sectionNums__divContainer'>
          <div className='sectionNums__textContainer'>
            <h2>Contacto</h2>
            <div className='textEmail'>
              <p>terapiaocupacional.tefy@gmail.com</p>
              <p>8318-5409</p>
            </div>
            <div className='redesContainer'>
              <a href="https://instagram.com/planetasensorialcr?igshid=MTNiYzNiMzkwZA==" target='__blank'><img src='src\assets\instagram-logo.png' className='redesImages' alt='instagram'/></a>
              <a href="https://www.facebook.com/planetasensorialcr" target='__blank'><img src='src\assets\Facebook_Logo.png' className='redesImages' alt='facebook'/></a>
              <a href="https://api.whatsapp.com/send?phone=50683185409" target='__blank'><img src='src\assets\whatsapp-logo.png' className='redesImages' alt='whatsap'/></a>
            </div>
          </div> 
        <div className='ubication'><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a></iframe></div>
      </div>
    </section>
  )
}
