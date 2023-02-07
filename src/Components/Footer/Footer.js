import React from 'react';

import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { SlSocialVkontakte } from 'react-icons/sl';
import { IoLogoWhatsapp } from 'react-icons/io';
import { TbBrandTelegram } from 'react-icons/tb';

import './footer.scss';
import '../Navbar/navbar.scss';

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__top'>
          <div className='logo__wrapper'>
            <Link to='/' className='navbar__logo'>
              Travel<span>Agency</span>
            </Link>
            <p>Choose your favourite destination.</p>
          </div>
          <div className='contact__wrapper'>
            <a href='mailto:romain.muhametschin@yandex.ru' target='_blank' rel='noreferrer'><MdEmail /></a>
            <a href='https://vk.com/id367096719' target='_blank' rel='noreferrer'><SlSocialVkontakte /></a>
            <a href='https://skobelkin.ru/whatsapp/79999797138?text=Hello+World!' target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
            <a href='https://t.me/+79999797138' target='_blank' rel='noreferrer'><TbBrandTelegram /></a>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='list-item'>
            <h4>Project</h4>
            <a href='/'>Changelog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Versions</a>
          </div>
          <div className='list-item'>
            <h4>Community</h4>
            <a href='/'>GitHub</a>
            <a href='/'>Issues</a>
            <a href='/'>Project</a>
            <a href='/'>Twitter</a>
          </div>
          <div className='list-item'>
            <h4>Help</h4>
            <a href='/'>Support</a>
            <a href='/'>Contact Us</a>
            <a href='/'>Troubleshooting</a>
          </div>
          <div className='list-item'>
            <h4>Others</h4>
            <a href='/'>Terms of Servise</a>
            <a href='/'>Privacy Policy</a>
            <a href='/'>License</a>
          </div>
        </div>
      </footer>
      <div className='footer__copyright'>
        <small>2022 Mukhametshin Roman &copy; All Rights Reserved</small>
      </div>
    </>
  );
}

export default Footer;