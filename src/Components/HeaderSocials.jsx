import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='left-column'>
     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
  <BsLinkedin />
</a>
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  <BsGithub />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <BsTwitter />
</a>

    </div>
  )
}

export default HeaderSocials
