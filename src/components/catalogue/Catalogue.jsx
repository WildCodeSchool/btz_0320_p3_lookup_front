/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import styles from './Catalogue.module.css';

const inclinaison2 = require('./Inclinaison2.png');

const Catalogue = () => {
  return (
    <div>
      <Row className={styles.card}>
        <Col>
          <h2 className={styles.title2}>Découvrez</h2>
          <p className={styles.subtitle}>
            Des solutions ergonomiques pour le monde d'aujourd'hui et de demain
          </p>
        </Col>
      </Row>
      <div className={styles.sectionImgText}>
        <div className={styles.imgDiv}>
          <img
            className={styles.inclinaison}
            src={inclinaison2}
            alt="support incliné"
          />
        </div>
        <div className={styles.gamme}>
          <h3 className={styles.title3}>
            Notre gamme de produits ergonomiques
          </h3>
          <p className={styles.subtitle2}>
            Proposer des produits accessibles et adaptés à tous les usages
            permettant d'améliorer simplement les conditions de travail de vos
            collaborateurs.
          </p>
          <Button className={styles.trouvez}>
            Trouvez celui qui vous correspond!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
