import React from 'react'
import '../HeroComp/HeroComp.css';

export default function HeroComp({image, title, text}) {
  return (
    <div className='heroContainer' style={{backgroundImage: `url('${image}')`}}>
        <section className='heroContainer__sectionHero'>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    </div>
  )
}
