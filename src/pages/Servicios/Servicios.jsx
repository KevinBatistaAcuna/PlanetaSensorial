import React from 'react'
import HeroComp from '../../components/HeroComp/HeroComp'
import imgHero from '../../assets/Planetasensorialimg6.jpg'
import imgTerapia from '../../assets/Terapia-fisica-ninos-pediatra.jpg'
import ServicioType from '../../components/ServicioType/ServicioType'

export default function Servicios() {
  return (
    <div>
        <HeroComp image={imgHero} title={'Servicios'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'}/>
        <section>
            <ServicioType orientationImg={window.screen.width < 770 ? 'left' : 'right'} image={imgTerapia} title={'Terapia fisica'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'}/>
            <ServicioType light={true} orientationImg={'left'} image={imgTerapia} title={'Terapia fisica'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'}/>
            <ServicioType orientationImg={window.screen.width < 770 ? 'left' : 'right'} image={imgTerapia} title={'Terapia fisica'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'}/>
            <ServicioType light={true} orientationImg={'left'} image={imgTerapia} title={'Terapia fisica'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'}/>
        </section>
    </div>
  )
}
