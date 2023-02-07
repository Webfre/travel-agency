import React from 'react';
import './destination.scss';

function DestinationData({ heading, text, img1, img2, className }) {
  return (
    <div className={className}>
      <div className='destination__desc'>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
      <div className='destination__image'>
        <img src={img1} alt='Volcano, St. Helens' />
        <img src={img2} alt='Volcano, St. Helens' />
      </div>
    </div>
  );
}

export default DestinationData;