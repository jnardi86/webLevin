import Service from '../components/Service'
import ServicePhoto from '../components/ServicePhoto'
import serviceImg1 from '../../../assets/service_1.png'
import serviceImg2 from '../../../assets/service_2.png'
import serviceImg3 from '../../../assets/service_3.png'
import serviceImg1Desktop from '../../../assets/services_1_desktop.png'
import serviceImg2Desktop from '../../../assets/services_2_desktop.png'
import serviceImg3Desktop from '../../../assets/services_3_desktop.png'
import './servicesList.css'

const ServicesList = () => {
  return (

    <div className='main-container'>
      <div className="services">
        <Service
          title='Servicio_1'
          description='Esta es la descripción del servicio 1'
        />
        <ServicePhoto
          imgMobile={serviceImg1}
          imgDesktop={serviceImg1Desktop}
        />
        <Service
          title='Servicio_2'
          description='Esta es la descripción del servicio 2'
        />
        <ServicePhoto
          imgMobile={serviceImg2}
          imgDesktop={serviceImg2Desktop}
        />
        <Service
          title='Servicio_3'
          description='Esta es la descripción del servicio 3'
        />
        <ServicePhoto
          imgMobile={serviceImg3}
          imgDesktop={serviceImg3Desktop}
        />
      </div>
    </div>
  )
}

export default ServicesList