import React from 'react';
import CarouselHome from './carouselhome/CarouselHome';
import Catalogue from './catalogue/Catalogue';
import PressRelation from './pressRelation/PressRelation';
import Newsletter from './newsletter/Newsletter';

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <Catalogue />
      <PressRelation />
      <Newsletter />
    </div>
  );
};

export default Home;
