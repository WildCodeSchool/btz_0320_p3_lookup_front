import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col, Container } from 'reactstrap';

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
      <Container fluid style={backgroundBlue} className={style.container}>
        <Row>
          <Col
            lg={{ size: 5, offset: 1 }}
            className={`${style.col} d-flex align-items-center row`}
          >
            {ReactHtmlParser(description)}
          </Col>
          <Col
            lg={{ size: 4 }}
            md={{ size: 8, offset: 2 }}
            sm={{ size: 12 }}
            className="d-flex align-items-center row"
          >
            <img className={style.picture} src={picture} alt={title} />
          </Col>
        </Row>
      </Container>
      <Container fluid className={style.container}>
        <Row>
          <Col
            lg={{ size: 4 }}
            md={{ size: 8, offset: 1 }}
            sm={{ size: 12 }}
            className="d-flex align-items-center row"
          >
            <img className={style.picture} src={picture2} alt={title} />
          </Col>
          <Col
            lg={{ size: 5, offset: 1 }}
            className={`${style.col} d-flex align-items-center row`}
          >
            {ReactHtmlParser(description2)}
          </Col>
        </Row>
      </Container>
      <Container fluid style={backgroundBlue} className={style.container}>
        <Row>
          <Col
            lg={{ size: 5, offset: 1 }}
            className={`${style.col} d-flex align-items-center row`}
          >
            {ReactHtmlParser(description3)}
          </Col>
          <Col
            lg={{ size: 4 }}
            md={{ size: 8, offset: 2 }}
            sm={{ size: 12 }}
            className="d-flex align-items-center row"
          >
            <img className={style.picture} src={picture3} alt={title} />
          </Col>
        </Row>
      </Container>
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
