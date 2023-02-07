import React from 'react';
import './info.scss';

function Info() {
  return (
    <section className='info'>
      <div className='info__text'>
        <h2>Our History</h2>
        <p>
          Travel Agency is a commercial project dedicated to travel. The tourist portal was created in 2022 and updated in early 2023.
        </p>
      </div>
      <div className='info__text'>
        <h2>Our Mission</h2>
        <p>
          Make independent travel accessible by providing up-to-date and reliable information about countries, attractions, ticket booking services and hotels.
        </p>
      </div>
      <div className='info__text'>
        <h2>Our Vision</h2>
        <p>
          We want the project to be interesting and useful to our users. You can send your wishes and suggestions via <a href='https://t.me/+79999797138' target='_blank' className='feedback' rel='noreferrer'>feedback.</a>
        </p>
      </div>
    </section>
  );
}

export default Info;