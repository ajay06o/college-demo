import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import about1 from '../../assets/about1.jpg'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about1} alt="About Us" className='about-img'/>
            <img src={play_icon} alt="Play Video" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Welcome to the world of knowledge</h2>
            <p>The university is a place of learning, growth, and opportunity—committed to providing high-quality education across a wide range of disciplines. With a focus on academic excellence and personal development, it offers undergraduate, postgraduate, and research programs designed to prepare students for the future.
            Students here benefit from experienced faculty, modern facilities, and a vibrant campus life that encourages innovation, creativity, and leadership. Whether in classrooms, laboratories, or co-curricular activities, the university supports every student’s journey to reach their full potential.
            Dedicated to shaping responsible citizens and future professionals, the university continues to inspire minds and transform lives through knowledge, values, and vision.</p>
        </div>
    </div>
  )
}

export default About
