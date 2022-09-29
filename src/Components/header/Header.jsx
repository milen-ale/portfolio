import React from 'react'
import CTA from '../CTA'
import HeaderSocials from '../HeaderSocials'
import "./header.css"
import Image from "../../assets/my.jpg"
const Header = () => {
  return (
    <header>
 <div className="container header_container">
   <h5>Hello I'm </h5>
   <h1>Milen Alebel</h1>
   <h5> Fullstack Developer</h5>
   <p className='text-light'> I Can help you build a product, feature or Website Look through some of my Work
     and experience! if you like what you see and need help on a project, I am availabel for hire.
   </p>
   <CTA/>
<HeaderSocials />
   <div className="me">
     <img src={Image} alt="me" />
     </div>

     <a href="#contact" className='scroll_down'>Scrol down</a>
   </div>
   </header>
  )
}

export default Header
