import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import style from './Press.module.css';

export default function Press({ image, texte, description }) {
  return (
    <>
      <Col sm="3">
        <div
          style={{ height: '20vh' }}
          className="d-flex align-items-center justify-content-center"
        >
          <img className={style.card} src={image} alt={description} />
        </div>
        <p>{texte}</p>
      </Col>
    </>
  );
}

Press.propTypes = {
  image: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
