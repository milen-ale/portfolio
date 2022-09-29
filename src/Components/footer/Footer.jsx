import React from 'react';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer_logo'>
     <a href="a">MILEN</a>
     <ul className='peremalinks'>
      <li> <a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#expetience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio"></a>Portfolio</li>
      <li><a href="#contact"></a>Contact</li>
     </ul>
     <div className="footer_socials">
       <a href="https://linkdin.com"> <FaLinkedinIn /> </a>
       <a href="https://twitter.com"><FiTwitter /> </a>
       <a href="https://instagram.com">< BsInstagram/></a>

       </div>
       <div className="footer_copyright">
         <small>&copy; milen portfolio All rights reserved</small>
         </div>
    </footer>
  )
}

export default Footer
