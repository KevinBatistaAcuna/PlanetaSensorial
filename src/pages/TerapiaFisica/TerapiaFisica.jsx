import React from 'react'
import ServiceInfoComp from '../../components/serviceInfoComp/ServiceInfoComp'
import imgTerapia from '../../assets/Terapia-fisica-ninos-pediatra.jpg' 

export default function TerapiaFisica() {
  return (
    <>
       <ServiceInfoComp img={imgTerapia} title={'Terapia Fisica'} owner={'Lucresia'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet voluptate eius placeat quam voluptas excepturi obcaecati id. Aperiam excepturi ullam ipsam pariatur debitis, maxime nisi veritatis quisquam, eum nam quis.'}/>
    </>
  )
}
