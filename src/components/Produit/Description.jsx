import React from 'react';
import PropTypes from 'prop-types';
import style from './Description.module.css';

function Description({ float, background }) {
  return (
    <div className={style.container} style={background}>
      <img
        className={style.picture}
        style={float}
        src="https://via.placeholder.com/600x300"
        alt="placeholder"
      />
      <h1 className={style.title}>Lorem</h1>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        repellendus ducimus similique cupiditate aut harum accusamus, repellat
        error voluptas doloremque dolorem iure eligendi nam deserunt explicabo.
        Sapiente fugit id accusantium!
      </p>
    </div>
  );
}

Description.propTypes = {
  float: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Description;
