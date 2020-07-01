/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import styles from './Services.module.css';

const conference = require('./conference.png');

export default function Services() {
  return (
    <Row>
      <Col lg="6">
        <h1 className={styles.title1}>
          {' '}
          Ateliers & <br /> Conférences
        </h1>
        <h3 className={styles.title2}>
          "L'impact des nouvelles technologies sur nos vies"
        </h3>
        <p className={styles.text}>
          Avec LookUp nous souhaitons aller plus loin dans ce que l'on pourrait
          appeler le digital en pleine conscience. <br />{' '}
        </p>
        <p className={styles.text}>
          Nous proposons des interventions auprès des écoles, universités et
          entreprises pour expliquer le fonctionnement des nouvelles
          technologies et des réseaux sociaux pour mieux les appréhender et
          revoir la place qu'ils occupent dans notre quotidien.{' '}
        </p>
        <Button className={styles.contact}>Contactez-nous</Button>
      </Col>
      <Col lg="6">
        <img
          className={styles.conference}
          src={conference}
          alt="présentation"
        />
      </Col>
    </Row>
  );
}
