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
            <TextImg borderRadius={'30% 70% 29% 71% / 45% 13% 87% 55%'} clickable={true} route="terapiaFisica" classSelected={'noLight'} orientationImg={window.screen.width < 770 ? 'left' : 'right'} img={imgTerapia} title='Terapia fisica' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'/>
            <TextImg borderRadius={'53% 47% 17% 83% / 48% 11% 89% 52%'} clickable={true} route="terapiaOcupacional" classSelected={'light'} orientationImg={'left'} img={imgTerapia} title='Terapia fisica' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'/>
            <TextImg borderRadius={'53% 47% 53% 47% / 14% 32% 68% 86%'} clickable={true} route="terapiaLenguaje" classSelected={'noLight'} orientationImg={window.screen.width < 770 ? 'left' : 'right'} img={imgTerapia} title='Terapia fisica' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'/>
            <TextImg borderRadius={'15% 85% 53% 47% / 89% 21% 79% 11%'} clickable={true} route="terapiaFisica" classSelected={'light'} orientationImg={'left'} img={imgTerapia} title='Terapia fisica' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime reiciendis necessitatibus, ab nemo repellat sit quas earum eligendi, numquam impedit expedita aperiam perspiciatis, minima quaerat obcaecati eius beatae veritatis!'/>
        </section>
    </div>
  )
}
