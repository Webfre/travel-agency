import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { SlMenu } from 'react-icons/sl';
import { IoMdClose } from 'react-icons/io';

import { links } from '../../data';

import './navbar.scss';

function Navbar() {
  const [navBar, setNavBar] = useState(false);

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar__logo'>
        Travel<span>Agency</span>
      </Link>

      <div className='menu-icons' onClick={() => setNavBar(prev => !prev)}>
        {
          navBar ? <IoMdClose /> : <SlMenu />
        }
      </div>

      <ul className={navBar ? 'navbar__links active' : 'navbar__links'}>
        {
          links.map(({ name, path, icon }, index) => {
            return (<li key={index}>
              <NavLink
                to={path}
                className='link__item'
              >
                <div className='navbar__item'>
                  <div className='item__icon'>{icon}</div>
                  <div className='item__name'>{name}</div>
                </div>
              </NavLink>
            </li>);
          })
        }
        <button className='button-nav'>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;