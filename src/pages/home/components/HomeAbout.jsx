import React from 'react'
import "./HomeAbout.css"
import "../../../../src/styles.css"
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <div className="main-container">
      <div className='about-container mt-5 mb-5'>
        <div className="about-text">
          <p className='title'>Dra. María Elena Levín</p>
          <p className='body mb-2'>Soy médica especializada en diagnóstico por imágenes.
            Mi trayectoria incluye formación en Medicina Nuclear,
            estudios internacionales en Tomografía Computada y Resonancia Magnética,
            así como una dedicación continua a la práctica médica y la docencia.
            Mi compromiso con la formación de futuros médicos y
            la mejora de la atención médica ha sido una constante en mi carrera.
            ¡Aprende más sobre mi historia y contribuciones en el campo de la medicina!
          </p>

          < Link className="btn-1" to="/about" >Ver más</Link>

        </div>
        <div className="about-image"></div>
      </div>
    </div>
  )
}

export default HomeAbout