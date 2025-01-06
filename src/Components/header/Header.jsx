import React from 'react';
import CTA from '../CTA';
import HeaderSocials from '../HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <div className='header_socials'>
          <HeaderSocials />
          <div className='vertical-line'></div>
        </div>

        <div className='center-column'>
          <div className='text-container'>
            <h5 className="greeting">Hi, my name is</h5>
            <h1 className="name">Milen Alebel.</h1>
            <h5 className="role">I am a software engineer.</h5>
            <p className="bio">
            I’m a software and web developer specializing in backend development and building scalable digital solutions. Currently, I’m focused on creating innovative backend systems for various projects.
            </p>
            <div className="cta-buttons">
              <CTA />
            </div>
          </div>
        </div>

        <div className='right-column'>
          <div className='email'>
            <a href="mailto:milenalebel2@gmail.com">milenalebel2@gmail.com</a>
          </div>
          <div className='scroll_down'>
            <a href='#contact'>Scroll down</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
