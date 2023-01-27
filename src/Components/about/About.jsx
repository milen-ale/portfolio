import React from 'react';
import './about.css';
import Me from '../../assets/Me.jpg';
import { BsAward } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BiFolderOpen } from 'react-icons/bi';

const about = () => {
  return (
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='.container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Me} alt='' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about-card'>
              <BsAward className='about_icon' />
              <h5> Experience</h5>
              <small> 1+ year Working</small>
            </article>

            {/* <article className='about-card'>
              <FiUsers className='about_icon' />
              <h5> Clients</h5>
              <small> 200+ Worldwide</small>
            </article> */}

            <article className='about-card'>
              <BiFolderOpen className='about_icon' />
              <h5> Projects</h5>
              <small> 50+ Compleated </small>
            </article>
          </div>
          <p>
            I'm a <strong>self-motivated, dedicated</strong>{' '}
            <strong>
              and a high-performing Web Developer with a passion for technology.
              Impact on positive organisational outcomes through programming and
              problem-solving. Confident in collaborating with cross-functional
              teams to solve complex, high-stakes problems. I am committed to
              continuous improvement and contributing to team success.{' '}
            </strong>
            products.
            <strong>
              {' '}
              I've spent the last several months working remotely and
              asynchronously with people across 3 different time zones (UTC-6,
              UTC+1, UTC+5) which makes me way special.
            </strong>
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
