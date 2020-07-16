import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'reactstrap';

import style from './Description.module.css';

function DescriptionCard({
  description,
  description2,
  description3,
  picture,
  picture2,
  picture3,
  backgroundBlue,
  title,
}) {
  return (
    <>
      <Row style={backgroundBlue} className={style.container}>
        <Col>{ReactHtmlParser(description)}</Col>
        <Col>
          <img
            className={style.picture}
            src={picture}
            alt={title}
            width="70%"
          />
        </Col>
      </Row>
      <Row className={style.container}>
        <Col>
          <img
            className={style.picture}
            src={picture2}
            alt={title}
            width="70%"
          />
        </Col>
        <Col>{ReactHtmlParser(description2)}</Col>
      </Row>
      <Row style={backgroundBlue} className={style.container}>
        <Col>{ReactHtmlParser(description3)}</Col>
        <Col>
          <img
            className={style.picture}
            src={picture3}
            alt={title}
            width="70%"
          />
        </Col>
      </Row>
    </>
  );
}

DescriptionCard.propTypes = {
  description: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  description3: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  picture2: PropTypes.string.isRequired,
  picture3: PropTypes.string.isRequired,
  backgroundBlue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DescriptionCard;
