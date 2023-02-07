import React from 'react';
import './trip.scss';

function TripData({ img, title, desc }) {
  return (
    <div className='trip-card'>
      <div className='trip-image'>
        <img src={img} alt='Trip' />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default TripData;