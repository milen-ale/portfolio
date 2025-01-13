import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer_logo">
      <a href="#top">MILEN</a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FiTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; MILEN Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
