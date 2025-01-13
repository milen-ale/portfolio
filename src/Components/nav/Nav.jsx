import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookBookmark, BiMessageDetail } from 'react-icons/bi';
import './nav.css';


const NavLink = ({ href, icon: Icon, label, activeNav, setActiveNav }) => (
  <a
    href={href}
    onClick={() => setActiveNav(href)}
    className={activeNav === href ? 'active' : ''}
    aria-current={activeNav === href ? 'page' : undefined}
    aria-label={label}
  >
    <Icon />
  </a>
);

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <header>
      <nav role="navigation">
        <NavLink
          href="#"
          icon={AiOutlineHome}
          label="Home"
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <NavLink
          href="#about"
          icon={AiOutlineUser}
          label="About"
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <NavLink
          href="#experience"
          icon={BiBookBookmark}
          label="Experience"
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <NavLink
          href="#contact"
          icon={BiMessageDetail}
          label="Contact"
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
      </nav>
    </header>
  );
};

export default Nav;