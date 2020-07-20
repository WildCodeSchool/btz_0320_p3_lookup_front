import React from 'react';
import PropTypes from 'prop-types';
import style from './Press.module.css';

export default function Press({ image, texte, description }) {
  return (
    <>
      <img className={style.card} src={image} alt={description} />
      <p>{texte}</p>
    </>
  );
}

Press.propTypes = {
  image: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
