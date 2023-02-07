import React from 'react';

import Mountain1 from '../../Image/sent-helenc.jpg';
import Mountain2 from '../../Image/sent-helenc2.jpg';
import Mountain3 from '../../Image/montan1.jpg';
import Mountain4 from '../../Image/montan2.jpg';

import DestinationData from './DestinationData';
import './destination.scss';

function Destination() {
  return (
    <section className='destination'>
      <h2>Popular Destinations</h2>
      <p>Planning a vacation has never been so easy!</p>
      <DestinationData
        heading='St. Helens (USA, Washington State)'
        text='Height: 2550 m.
                The best time to visit: from April to October
                This volcano is known primarily for the fact that its eruption, which occurred in 1980, was recognized as the most powerful in the last century. Then a layer of ash covered the territory of four states, and the force of the explosion corresponded to 500 bombs dropped on Hiroshima.
                Today, all those who are not afraid of these facts can easily climb to the destructive peak. In nearby Seattle, most tour companies offer tours to the summit, including helicopter tours. But if you wish, you can not pay anything at all for climbing (if it takes place from November to March) and climb yourself for free, although this is not the most successful period due to weather conditions. And the rest of the year you will have to pay the mandatory $ 22 for a permit to visit the mountain, and from May 15 to October 31, no more than 100 people per day are allowed on St. Helens.'
        img1={Mountain1}
        img2={Mountain2}
        className='destination__info'
      />
      <DestinationData
        heading='Montagne Pele (Martinique)'
        text='Height: 1,397 m.
                The best time to visit: from November to June
                The name of this volcano translates very innocuously — Bald Mountain. Montagne Pele is located in the northern part of the island, a couple of dozen kilometers from the capital Fort de France. It is known for the fact that during its eruption in April 1902, like Vesuvius, it wiped out an entire city with its entire population from the face of the earth.
                The last time the volcano was active was in 1932. Since then, there has been a lull, and even managed to build a whole museum of volcanism at the foot of Bald Mountain. A visit to the volcano (and the museum) can perfectly fit into a holiday in Martinique: from the top of Montagne Pele, there is an amazing view of the entire island. The ascent is not particularly difficult, especially since the height of the volcano is only 1397 m. For the services of a guide, you need to contact the Bureau de la randonnée, and you should immediately attend to the presence of a company — the minimum number of people in the tour group is four.'
        img1={Mountain3}
        img2={Mountain4}
        className='destination__info-reverse'
      />
    </section>
  );
}

export default Destination;