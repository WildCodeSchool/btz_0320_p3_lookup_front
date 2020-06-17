import React from 'react';
import CarouselHome from './carouselhome/CarouselHome';
import Catalogue from './catalogue/Catalogue';
import PressRelation from './pressRelation/PressRelation';

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <Catalogue />
      <PressRelation />
    </div>
  );
};

export default Home;
