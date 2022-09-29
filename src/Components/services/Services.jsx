import React from 'react'
import "./service.css";
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='service'>
      <h5> What I Offer</h5>
      <h2>Services</h2>
      <div className="container  services_container text-light" >
       <article className='service'>
         <div className="service_heade ">
           <h3>UI/UX</h3>
          </div>
           <ul className='service_list'>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
            </ul>
            {/* End OF UI/UX */}
         </article> 
        
         <article className='service'>
         <div className="service_heade text-light">
           <h3>Web Development</h3>
          </div>
           <ul className='service_list'>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
            </ul>
            {/* Web Development */}
    
         </article> 
         <article className='service'>
         <div className="service_heade text-light">
           <h3>Content Creation</h3>
         </div>
           <ul className='service_list'>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
             <li><BsCheck2 className='service_list_icons'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
             </li>
            </ul>
            {/* Content Creation */}

         </article>
        
        </div>     
        
         </section>
  )
}

export default Services
