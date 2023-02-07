import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.scss';

function NotFound() {
  return (
    <div className='not-found'>
      <div className='card'>
        <div className='container-flex'>
          <div className='error'>
            <span>404 error</span>
            <Link to='/' className='next-home'>more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;