import React from 'react'
import '../ServiceInfoComp/ServiceInfoComp.css'


export default function ServiceInfoComp({img, title, text, owner}) {
  return (
    <section className='serviceInfoComp__sectionContainer'>
        <div className='serviceInfoComp__divImgContainer'>
            <h2>{title}</h2>
            <img src={img} alt="" className='serviceInfoComp__img'/>
            <p>{text}</p>
        </div>
        <aside className='serviceInfoComp__asideContainer'>
            <p>Por : <b>{owner}</b></p>
        </aside>
    </section>
  )
}
