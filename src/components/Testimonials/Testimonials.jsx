import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

import user4 from '../../assets/user-4.png';
import useer1 from '../../assets/useer1.png';
import useer2 from '../../assets/useer2.png';
import useer3 from '../../assets/useer3.png';
import useer4 from '../../assets/useer4.png';

const Testimonials = () => {
        const slider = useRef(null);
        let tx = 0;

    const slideForward = () => {

        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    const slideBackward = () => {

        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='Testimonials' id='testimonials'>
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={useer1} alt="User 1" />
                <div>
                    <h3>tMC Uday</h3>
                    <span>2024-07-23</span>
                </div>
              </div>
              <p>"స్టూడెంట్ కి మంచి భవిష్యత్తు కోసం.."</p>
            </div>
          </li>
          
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={useer2} alt="User 2" />
                <div>
                    <h3>Sheik Salman BashatMC Uday</h3>
                    <span>6 years ago</span>
                </div>
              </div>
              <p>"One of the best college in entire Andhra Pradesh state with Excellent Academics, Well Discipline, Good Placement record, Active Participation of Students in Co & Extra curricular activities under SITE RED ANTS club which includes Social Service, Culinary, Photography, Sports, Cultural etc."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={useer3} alt="User 3" />
                <div>
                    <h3>Durgaprasad godugu</h3>
                    <span>4 years ago</span>
                </div>
              </div>
              <p>"Nice palce lots of memorable moments. superb environment. Best opportunity to gain more knowledge to study in this campus. In this place I learned lots of things place major role in my career."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={useer4} alt="User 4" />
                <div>
                    <h3>Krishnamoorthy P</h3>
                    <span>2 months ago</span>
                </div>
              </div>
              <p>"Good Infrastructure, Good Faculties, Advanced teaching learning process, NBA, NAAC accredited college. Students No 1 preferable college in tadepalligudem, Tanuku, area is SASI...</p>
            </div>
          </li>
        </ul>
      </div>
    </div> 
  );
}

export default Testimonials;

