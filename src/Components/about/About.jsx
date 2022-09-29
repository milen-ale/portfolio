import React from 'react'
import './about.css'
import Me from "../../assets/Me.jpg"
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {BiFolderOpen} from 'react-icons/bi'

const about = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
   <h2>About Me</h2>
  <div className='.container about_container'>
    <div className="about_me">
<div className="about_me-image">
  <img src={Me} alt="" />
  </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about-card'>
            <BsAward className='about_icon' />
            <h5> Experience</h5>
            <small>  1 year Working</small>
          </article>

          <article className='about-card'>
            <FiUsers className='about_icon' />
            <h5> Clients</h5>
            <small> 200+ Worldwide</small>
          </article>

          <article className='about-card'>
            <BiFolderOpen className='about_icon' />
            <h5> Projects</h5>
            <small>  80+ Compleated </small>
          </article>
          </div>
          <p>I'm a <strong>self-motivated, and  dedicated</strong>devloper with experience creating <strong>unique,high-end,and innovation</strong>
          products.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    </div>
     </section>
  )
}

export default about
