import React from 'react';

import PropTypes from 'prop-types';

import { Col } from 'reactstrap';

export default function Press({ image, texte }) {
  return (
    <>
      <Col sm="3">
        <div
          style={{ height: '20vh' }}
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src={image}
            alt=""
            style={{
              width: '50%',
            }}
          />
        </div>
        <p>{texte}</p>
      </Col>
    </>
  );
}

Press.propTypes = {
  image: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};
