import React from 'react';

import Header from '../../Components/Header/Header';
import image from '../../Image/cherry-blossom-spring-seoul-south-korea-city-cityscape-pink.jpg';
import Info from '../../Components/InfoHistory/Info';

function About() {
  return (
    <>
      <Header
        name='header-mid'
        path={image}
        title='About Us'
      />
      <Info />
    </>
  );
}

export default About;