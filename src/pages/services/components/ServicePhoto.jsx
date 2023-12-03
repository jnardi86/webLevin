import './servicePhoto.css'

const ServicePhoto = ({img}) => {
  return (
    <div className='servicePhoto'>
        <img src={img} alt="Services Img" />
    </div>
  )
}

export default ServicePhoto