import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header(props) {
  return (
    <header className={props.name}>
      <img src={props.path} alt='lavender summer night' />
      <div className='header__info'>
        <h1 className='header__title'>{props.title}</h1>
        <p className='header__desc'>{props.desc}</p>
        <Link to={props.url} className={props.btnClass}>
          {props.buttonText}
        </Link>
      </div>
    </header>
  );
}

export default Header;

