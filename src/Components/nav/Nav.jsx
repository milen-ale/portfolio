import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';
// import {RiServiceLine} from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi';
import { useState } from 'react';

import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <div>
      <nav>
        <a
          href='#'
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href='#about'
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </a>
        <a
          href='#experiance'
          onClick={() => setActiveNav('#experiance')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBookBookmark />
        </a>
        {/* <a href="#services" onClick={() =>setActiveNav('#service')} className={activeNav === '#service' ? 'active':''}>< RiServiceLine /></a> */}
        <a
          href='#contact'
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageDetail />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
