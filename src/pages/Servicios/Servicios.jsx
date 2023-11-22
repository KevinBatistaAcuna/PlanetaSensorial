import React from 'react'
import HeroComp from '../../components/HeroComp/HeroComp'
import imgHero from '../../assets/Planetasensorialimg6.jpg'
import imgTerapia from '../../assets/Terapia-fisica-ninos-pediatra.jpg'
import TextImg from '../../components/TextImg/TextImg'

export default function Servicios() {
  return (
    <div>
        <HeroComp image={imgHero} title={'Servicios'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'}/>
        <section>
            <TextImg classSelected={'noLight'} orientationImg={window.screen.width < 770 ? 'left' : 'right'} img={imgTerapia} title='Terapia fisica' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'/>
            <TextImg classSelected={'light'} orientationImg={'left'} img={imgTerapia} title='Terapia fisica' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'/>
            <TextImg classSelected={'noLight'} orientationImg={window.screen.width < 770 ? 'left' : 'right'} img={imgTerapia} title='Terapia fisica' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'/>
            <TextImg classSelected={'light'} orientationImg={'left'} img={imgTerapia} title='Terapia fisica' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'/>
        </section>
    </div>
  )
}
