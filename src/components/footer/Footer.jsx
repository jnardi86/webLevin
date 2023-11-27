import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div class="footer-section">
          <div className="container">
            <p className='logo mt-0 mb-1'>Dra. María Elena Levín</p>
            <p className='mb-0 mt-0'>Informes de Estudios</p>
          </div>
        </div>

        <div class="footer-section">
          <div className="container">
            <p className='mb-1'>Cell: 11-1234-5678</p>
            <p className='mt-0'>E-mail: dralevin@gmail.com</p>
          </div>
        </div>

        <div class="footer-section">
          <div className="container">
            <p>Inicio</p>
            <p>Servicios</p>
            <p>Sobre Mi</p>
            <p>Contacto</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer