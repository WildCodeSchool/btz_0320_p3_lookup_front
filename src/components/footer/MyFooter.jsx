import React from 'react';
import { Row, Col } from 'reactstrap';
import StickyFooter from 'react-sticky-footer';
import styles from './Footer.module.css';

const logo = require('../navbar/LogoLookUp.png');
const facebook = require('../navbar/facebook.png');
const linkedin = require('../navbar/linkedin.png');

export default function MyFooter() {
  return (
    <StickyFooter
      bottomThreshold={50}
      normalStyles={{
        backgroundColor: 'rgba(218, 219, 219,.8)',
        padding: '1rem',
      }}
      stickyStyles={{
        backgroundColor: 'rgba(218, 219, 219,.8)',
        padding: '1rem',
      }}
    >
      <Row>
        <Col lg={{ size: 3 }}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Col>
        <Col lg={{ size: 3, offset: 6 }}>
          <Row>
            <img className={styles.facebook} src={facebook} alt="facebook" />
            <img className={styles.linkedin} src={linkedin} alt="linkedin" />
          </Row>
          <Row>Creé en 2020 par LookUp</Row>
        </Col>
      </Row>
    </StickyFooter>
  );
}
