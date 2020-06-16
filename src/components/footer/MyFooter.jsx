import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Footer.module.css';

const eticoop = require('./eticoop.png');
const nvaquitaine = require('./nvaquitaine.png');
const bdea = require('./bdea.png');

export default function MyFooter() {
  return (
    <footer>
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <Row className="d-flex align-items-center">
            <Col>
              <img className={styles.partners} src={eticoop} alt="eticoop" />
            </Col>
            <Col>
              <img
                className={styles.partners}
                src={nvaquitaine}
                alt="nvaquitaine"
              />
            </Col>
            <Col>
              <img className={styles.partners} src={bdea} alt="bdea" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center pt-3">
        Creé en 2020 par LookUp
      </Row>
    </footer>
  );
}
