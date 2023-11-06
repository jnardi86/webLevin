import React from 'react'
import "./aboutView.css"
import AboutCV from '../components/AboutCV'
import AboutHero from '../components/AboutHero'

const AboutView = () => {
  return (
    <div>
      <AboutHero/>
      <AboutCV/>
    </div>
  )
}

export default AboutView