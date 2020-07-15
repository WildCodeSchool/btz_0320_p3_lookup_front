import React from 'react';
import Description from './Description';
import ImageProduit from './ImageProduit';
import style from './Produits.module.css';
import Avis from './Avis';

const Produits = () => {
  const right = {
    float: 'right',
    translate: '25%',
  };
  const left = {
    float: 'left',
    translate: '-25%',
  };
  const whiteBackground = {
    width: '75vw',
  };
  const blueBackground = {
    backgroundColor: 'lightblue',
    width: '75vw',
  };
  return (
    <div>
      <ImageProduit buttonLabel="Demande de devis" />
      <h1 className={style.title}>PRODUITS DISPONIBLES</h1>
      <Description float={right} background={blueBackground} />
      <Description float={left} background={whiteBackground} />
      <Description float={right} background={blueBackground} />
      <Avis />
    </div>
  );
};

export default Produits;
