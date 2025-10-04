import React from 'react'
import './Campus.css'




import whitearrow from '../../assets/white-arrow.png'
import campus1 from '../../assets/campus1.jpg'
import campus2 from '../../assets/campus2.jpg'
import campus3 from '../../assets/campus3.jpg'
import campus4 from '../../assets/campus4.jpg'



const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
        <img src={campus1} alt="" />
        <img src={campus2} alt="" />
        <img src={campus3} alt="" />
        <img src={campus4} alt="" />
    </div>
    <button className='btn dark-btn'>See more <img src={whitearrow} alt="" /></button>
    </div>
  )
}

export default Campus
