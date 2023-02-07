import React from 'react';

import Destination from '../../Components/Destination/Destination';
import Header from '../../Components/Header/Header';
import Trip from '../../Components/Trip/Trip';
import image from '../../Image/noch-lavandy-leto.jpg';
import './home.scss';

function Home() {
  return (
    <>
      <Header
        name='header'
        path={image}
        title='Say "Yes" to new impressions!'
        desc='Choose Your Favourite Destination'
        url='/contact'
        btnClass='show'
        buttonText="Let's go travel"
      />
      <Destination />
      <Trip />
    </>
  );
}

export default Home;