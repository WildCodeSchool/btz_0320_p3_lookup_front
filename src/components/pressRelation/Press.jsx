import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import style from './Press.module.css';

export default function Press({ image, description }) {
  return (
    <>
      <Col
        sm="3"
        className={`${style.img} d-flex align-items-center justify-content-center`}
      >
        <img className={style.card} src={image} alt={description} />
      </Col>
    </>
  );
}

Press.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
