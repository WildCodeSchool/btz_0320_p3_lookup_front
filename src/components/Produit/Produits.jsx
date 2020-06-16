import React from 'react';
import Description from './Description';
import ImageProduit from './ImageProduit';
import style from './Produits.module.css';

const Produits = () => {
  const right = {
    float: 'right',
  };
  const left = {
    float: 'left',
  };
  const blueBackground = {
    backgroundColor: 'lightblue',
  };
  return (
    <div>
      <ImageProduit />
      <h1 className={style.title}>JE SUIS LE TITRE</h1>
      <Description float={right} background={blueBackground} />
      <Description float={left} />
      <Description float={right} background={blueBackground} />
    </div>
  );
};

export default Produits;
