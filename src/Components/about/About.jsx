import React from 'react';
import './about.css';
import last from '../../assets/last.jpg';
import { BsAward } from 'react-icons/bs';
import { BiFolderOpen } from 'react-icons/bi';

const about = () => {
  return (
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='.container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={last}alt='' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about-card'>
              <BsAward className='about_icon' />
              <h5> Experience</h5>
              <small> 2+ year Working</small>
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
            <strong> I'm a self-motivated</strong>{' '}
            <strong>
           dedicated, and high-performing Software Developer with a passion for technology and problem-solving.
             I aim to drive positive organizational outcomes through backend development and efficient coding practices.
              Confident in collaborating with cross-functional teams to solve complex, high-stakes challenges, 
              I am committed to continuous improvement and team success. Over the past several months,
               I’ve been working remotely and asynchronously with teams across three different time zones
                (UTC-6, UTC+1, UTC+5), which has strengthened my adaptability and ability to deliver results in diverse environments.{' '}
            </strong>
            <strong>
              {' '}
              I've spent the last several months working remotely and
              asynchronously with people across 3 different time zones (UTC-6,
              UTC+1, UTC+5) which makes me way special.
            </strong>
          </p>
          <a href='#contact' className='btn btn-primary'>
            <b> Let's Talk</b>
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;