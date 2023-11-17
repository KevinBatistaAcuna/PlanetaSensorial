import React from 'react'
import './BodyContent.css'
import img from '../../assets/Planetasensorialimg3.jpg'
import HeroComp from '../HeroComp/HeroComp'

export default function BodyContent() {
  return (
    <HeroComp image={img} title={'Bienvedido'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente? Ullam at nam harum dignissimos, ex consectetur alias eius officiis, fugit ad velit. Sed quo sit est aspernatur possimus sunt!'}/>
  )
}
