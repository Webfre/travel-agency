import React from 'react';

import Header from '../../Components/Header/Header';
import image from '../../Image/peizazh-gory-priroda-ozero-otrazhenie-kamni-skaly-kanada-alb.jpg';
import Trip from '../../Components/Trip/Trip';

function Servise() {
  return (
    <>
      <Header
        name='header-mid'
        path={image}
        title='Service'
      />
      <Trip />
    </>
  );
}

export default Servise;