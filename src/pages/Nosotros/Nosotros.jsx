import React from 'react'
import './Nosotros.css'
import Lists from '../../components/Lists/Lists';
import TextsNosotros from '../../components/TextImg/TextImg';
import back from '../../assets/back.jpg'
import img1 from '../../assets/Planetasensorialimg3.jpg';
import img2 from '../../assets/place1.jpg';
import img3 from '../../assets/Planetasensorialimg4.jpg';
import img4 from '../../assets/Planetasensorialimg5.jpg';
import img5 from '../../assets/Planetasensorialimg2.jpg';
import HeroComp from '../../components/HeroComp/HeroComp';

function Nosotros() {
  const objetivosList = ['Ofrecer servicios de terapia de alta calidad.', 'Brindar asesoramiento e información a familias y centros educativos.', 'Fomentar la conciencia y la participación comunitaria.', 'Apoyar a nuestros usuarios para que alcancen la máxima independencia.', 'Mejorar la calidad de vida de las personas a las que servimos.', 'Mantener los más altos estándares de calidad.', 'Promover la colaboración interdisciplinaria.'];
  const principiosList = ['Compromiso con la Excelencia: Buscamos continuamente la excelencia en nuestros servicios terapéuticos y en la formación de nuestro personal.', 'Inclusión y Diversidad: Reconocemos el valor único de cada individuo, independientemente de sus capacidades y limitaciones.', 'Enfoque Individualizado: Cada caso recibe una evaluación y tratamiento personalizado.', 'Participación Activa: Trabajamos en estrecha colaboración con las personas y sus familias para planificar su futuro.', 'Colaboración Interdisciplinaria: Trabajamos de cerca con otros profesionales de la salud y terapeutas.', 'Comunicación Abierta y Constante: Mantenemos una comunicación efectiva y constante con las familias, brindando apoyo, orientación y actualizaciones sobre el progreso de sus hijos.']

  return (
    <>
      <HeroComp image={img5} title={'Conozcanos'} text={'En Planeta Sensorial, el futuro de tus hijos se transforma en un universo de oportunidades, donde el crecimiento y la felicidad brillan sin límites.'}/>
      <TextsNosotros img={back} borderRadius={'30% 70% 29% 71% / 45% 13% 87% 55%'} orientationImg={'right'} classSelected={'noLight'} title='Quiénes Somos' content='En Planeta Sensorial, somos apasionados por brindar terapias pediátricas de excelencia en un entorno cálido y seguro. Nuestro equipo altamente especializado trabaja con amor y empatía hacia los niños. Diseñamos nuestras instalaciones para satisfacer las necesidades únicas de cada niño y ofrecemos terapias personalizadas y efectivas. Mantenemos una comunicación abierta y constante con los padres, brindando apoyo y orientación. En Planeta Sensorial, cada niño es único y especial. Somos su aliado confiable en su viaje hacia un futuro lleno de logros y bienestar.'/>
      <TextsNosotros img={img1} borderRadius={'53% 47% 17% 83% / 48% 11% 89% 52%'} orientationImg={'left'} classSelected={'light'} title='Nuestro Impacto' content='En Planeta Sensorial, nuestro impacto se extiende más allá de las terapias individuales; empoderamos a las familias y enriquecemos a la comunidad. Nuestras instalaciones están convenientemente ubicadas en Molino de Cartago, con amplio estacionamiento y materiales especializados. Nuestro equipo se mantiene actualizado constantemente para brindar lo mejor.'/>
      <TextsNosotros img={img2} borderRadius={'53% 47% 53% 47% / 14% 32% 68% 86%'} orientationImg={'right'}classSelected={'noLight'} title='Nuestra Misión' content='Nuestra misión es proporcionar servicios clínicos y educativos de alta calidad a personas con diversas necesidades para ayudarles a desarrollar su máximo potencial e integrarse plenamente en la comunidad. Trabajamos en estrecha colaboración con las familias y terapeutas para brindar soluciones personalizadas a cada paciente.'/>
      <TextsNosotros  img={img3} borderRadius={'15% 85% 53% 47% / 89% 21% 79% 11%'} orientationImg={'left'} classSelected={'light'} title='Nuestra Visión' content='Nuestra visión es convertirnos en el principal centro de terapias para personas con diversas necesidades, incluyendo dificultades de aprendizaje, retraso psicomotor, déficit de atención e hiperactividad en estudiantes de preescolar y primaria, así como niños con discapacidades. Promovemos el desarrollo saludable y un fuerte apoyo tanto para los niños como para sus familias, generando un impacto positivo tanto en el aspecto médico como en el social.'/>
      <Lists img={img4} orientationImg={'right'} borderRadius={'85% 15% 60% 40% / 51% 55% 45% 49%'} classSelected={'noLight'} title='Nuestros Objetivos' content={objetivosList}/>
      <Lists img={img5} orientationImg={'left'} borderRadius={'36% 64% 21% 79% / 48% 55% 45% 52%'} classSelected={'light'} title='Nuestros Principios y Valores' content={principiosList}/>
    </>
  )
}

export default Nosotros;