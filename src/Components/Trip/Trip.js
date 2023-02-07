import React from 'react';

import City1 from '../../Image/hong-kong.jpg';
import City2 from '../../Image/khvar-khorvatiia.jpg';
import City3 from '../../Image/spasskaia-bashnia.jpg';

import TripData from './TripData';
import './trip.scss';

function Trip() {
  return (
    <section className='trip'>
      <h2>Recent Trips</h2>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className='trip__card'>
        <TripData
          img={City1}
          title='Hong Kong (Victoria Harbour)'
          desc='Hong Kong is a state within a state with its own laws, procedures and culture. It is a meeting place of the West and the East, where high technologies coexist with the traditional way of life, skyscrapers — with fishing villages, and prim shopping malls – with chaotic floating markets. Historically, Hong Kong is a former colony of Great Britain, and now it is a special administrative region of China, which impresses with the pace of its progress.'
        />
        <TripData
          img={City2}
          title='Croatia, Hvar Island (Hvar)'
          desc='Hvar is a long narrow island, in 1997 the Traveller magazine named it one of the ten most beautiful islands in the world. Lavender fields, vineyards and hills offering fabulous views of the mountains of mainland Europe are a wonderful place to relax. There are many charming villages on the island, if you want to relax, head to the southeast, to an almost untouched part of the island.'
        />
        <TripData
          img={City3}
          title='Russia, Moscow (Red Square)'
          desc='Moscow is the capital and largest city of Russia. Many paths and human destinies lead here, many fateful and significant historical events, human joys and hopes, misfortunes and disappointments, and, of course, legends, myths and legends are connected with this city. Moscow is a brilliant city, worthy of being called the capital in all respects.'
        />
      </div>
    </section>
  );
}

export default Trip;