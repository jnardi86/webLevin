import React from 'react'
import "./ServicesView.css"
import Service from '../components/Service'
import ServicePhoto from '../components/ServicePhoto'
import serviceImg1 from '../../../assets/service_1.png'
import serviceImg2 from '../../../assets/service_2.png'
import serviceImg3 from '../../../assets/service_3.png'


const ServicesView = () => {
  return (

    <div className='services'>
      <div className="services__header">
        <h2 className='titleSec2'>Servicios</h2>
      </div>
      <div className='main-container'>
        <div className="services__body">
          <Service
            title='Servicio_1'
            description='Esta es la descripción del servicio 1'
          />
          <ServicePhoto
            img={serviceImg1}
          />
          <Service
            title='Servicio_2'
            description='Esta es la descripción del servicio 2'
          />
          <ServicePhoto
            img={serviceImg2}
          />
          <Service
            title='Servicio_3'
            description='Esta es la descripción del servicio 3'
          />
          <ServicePhoto
            img={serviceImg3}
          />
        </div>
      </div>

    </div>
  )
}

export default ServicesView