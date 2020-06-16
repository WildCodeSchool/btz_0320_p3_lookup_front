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
        <Col lg={{ size: 8, offset: 2 }}>
          <Row className="d-flex align-items-center">
            <Col>
              <a
                href="https://www.eticoop.fr/accueil.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.partners} src={eticoop} alt="eticoop" />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.nouvelle-aquitaine.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.partners}
                  src={nvaquitaine}
                  alt="nvaquitaine"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.bayonne.cci.fr/Finance-Gestion/Bureau-de-Developpement-Economique-et-Attractivite-Adour-BDEA-Adour.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.partners} src={bdea} alt="bdea" />
              </a>
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
