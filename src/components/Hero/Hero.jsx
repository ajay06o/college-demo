import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>Join us in our mission to provide quality education for all.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
