import React, { useState, useEffect } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu-icon.png';
import close_icon from '../../assets/close.png'; 
import sasi from '../../assets/sasilogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={sasi} alt="Edusity Logo" className='logo' />

      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>Home</Link></li>
        <li><Link to="programs" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Programs</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={() => setMobileMenu(false)}>About</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Testimonials</Link></li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>
            <button className='btn'>Contact Us</button>
          </Link>
        </li>
      </ul>

      {/* Toggle button changes based on menu state */}
      <img
        src={mobileMenu ? close_icon : menu_icon}
        alt="Menu Icon"
        className='menu-icon'
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;


