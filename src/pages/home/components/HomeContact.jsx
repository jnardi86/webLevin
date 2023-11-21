import React from 'react'
import "./HomeContact.css"
import { Link } from 'react-router-dom';

const HomeContact = () => {
  return (
    <div className='main-container mt-5 mb-5'>
      <div className="homeContact-container">
        <div className="cell-container container">
        <div className="icon-container">
            <span class="material-symbols-outlined google-icon">call</span>
          </div>
          <div className="text-container">
            <p>11-1234-5678</p>
          </div>
        </div>

        <div className="email-container container">
          <div className="icon-container">
            <span class="material-symbols-outlined google-icon">mail</span>
          </div>
          <div className="text-container">
            < Link className="link-to" to="/contact" >Envie su consulta</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeContact