import Service from '../components/Service'
import ServicePhoto from '../components/ServicePhoto'
import serviceMobile1 from '../../../assets/services/service_1_mobile.png'
import './servicesList.css'

const ServicesList = () => {
  return (

    <div className="main-container">
      <div className="servicesList mt-5 mb-5">
        <Service
        title='Informes a distancia'
        description='Informes de imágenes vía email certificado por la dra. Levín'
        />
        <ServicePhoto
        imgMobile={serviceMobile1}
        />
      </div>
    </div>

  )
}

export default ServicesList

























{/* <div className="services mb-5">
<div className="services__description1 element">
  <Service
    title='Servicio__1'
    description='Esta es la descripción del servicio 1'
  />
</div>
<div className="services__photo1 element">
  <ServicePhoto
    imgMobile={serviceImg1}
    imgDesktop={serviceImg1Desktop}
  />
</div>
</div> */}

{/* <div className="services__description2 element">
<Service
  title='Servicio_2'
  description='Esta es la descripción del servicio 2'
/>
</div>
<div className="services__photo2 element">
<ServicePhoto
  imgMobile={serviceImg2}
  imgDesktop={serviceImg2Desktop}
/>
</div>
<div className="services__description3 element">
<Service
  title='Servicio_3'
  description='Esta es la descripción del servicio 3'
/>
</div>
<div className="services__photo3 element">
<ServicePhoto
  imgMobile={serviceImg3}
  imgDesktop={serviceImg3Desktop}
/>
</div> */}