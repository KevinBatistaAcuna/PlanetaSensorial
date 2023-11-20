import {React, useState, useRef} from 'react'
import './ContactNumber.css'
import face from '../../assets/Facebook_Logo.png'
import insta from '../../assets/instagram-logo.png'
import whatsapp from '../../assets/whatsapp-logo.png'

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
              <a href="https://www.facebook.com/planetasensorialcr?mibextid=ZbWKwL" target='__blank'><img src={face} alt="" className='redesImg'/></a>
              <a href="https://instagram.com/planetasensorialcr?igshid=MTNiYzNiMzkwZA==" target='__blank'><img src={insta} alt="" className='redesImg'/></a>
              <a href="https://api.whatsapp.com/send?phone=50672438091" target='__blank'><img src={whatsapp} alt="" className='redesImg'/></a>
            </div>
          </div> 
        <div className='ubication'><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a></iframe></div>
      </div>
    </section>
  )
}
