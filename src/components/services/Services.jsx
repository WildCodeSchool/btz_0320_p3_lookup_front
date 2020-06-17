/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Row, Col } from 'reactstrap';
import style from './Services.modules.css';

const conference = require('./conference.png');

export default function Services() {
  return (
    <div>
      <Row>
        <Col lg="6">
          <p className={style.text}>
            "L'impact des nouvelles technologies sur nos vies" Avec LookUp nous
            souhaitons aller plus loin dans ce que l'on pourrait appeler le
            digital en pleine conscience. ​ Nous proposons des interventions
            auprès des écoles, universités et entreprises pour expliquer le
            fonctionnement des nouvelles technologies et des réseaux sociaux
            pour mieux les appréhender et revoir la place qu'ils occupent dans
            notre quotidien.{' '}
          </p>
        </Col>
        <Col lg="6">
          <img
            className={style.conference}
            src={conference}
            alt="présentation"
            width="50%"
          />
        </Col>
      </Row>
    </div>
  );
}
