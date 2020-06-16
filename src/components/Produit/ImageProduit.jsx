import React from 'react';
import Image from './support.jpg';
import style from './ImageProduit.module.css';

function ImageProduit() {
  return (
    <div className={style.container}>
      <img
        className={style.image}
        src={Image}
        alt="une description"
        width="50%"
      />
      <button type="button" className={style.button}>
        Demande de devis
      </button>
    </div>
  );
}

export default ImageProduit;
