import React from 'react'
import "./contactView.css"
import ContactHero from '../components/ContactHero'
import ContactForm from '../components/ContactForm'

const ContactView = () => {
  return (
    <div>
      <ContactHero/>
      <ContactForm/>
    </div>
  )
}

export default ContactView