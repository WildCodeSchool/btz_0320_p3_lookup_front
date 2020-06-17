import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import style from './Footer.module.css';

const eticoop = require('./eticoopwhite.png');
const nvaquitaine = require('./nvaqwhite.png');
const bdea = require('./bdeawhite.png');

export default function MyFooter() {
  return (
    <Container fluid className={style.footer}>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col>
                <a
                  href="https://www.eticoop.fr/accueil.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={style.partners} src={eticoop} alt="eticoop" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.nouvelle-aquitaine.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={style.partners}
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
                  <img className={style.partners} src={bdea} alt="bdea" />
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <p
                  className={`d-flex justify-content-center ${style.footertext}`}
                >
                  Creé en 2020 par LookUp
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
