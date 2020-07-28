/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Catalogue.module.css';

const inclinaison2 = require('./Inclinaison2.png');

const Catalogue = () => {
  return (
    <div className={styles.card}>
      <Row>
        <Col>
          <h2 className={styles.title2}>L'ergonomie... naturellement</h2>
        </Col>
      </Row>
      <Row className={styles.sectionImgText}>
        <Col lg="6" md="12" className={styles.imgDiv}>
          <img
            className={styles.inclinaison}
            src={inclinaison2}
            alt="support incliné"
          />
        </Col>
        <Col
          xs="12"
          md="12"
          lg="5"
          className={`${styles.gamme} d-flex flex-column justify-content-center`}
        >
          <h3 className={styles.title3}>
            Notre gamme de produits ergonomiques
          </h3>
          <p className={styles.subtitle2}>
            Proposer des produits accessibles et adaptés à tous les usages
            permettant d'améliorer simplement les conditions de travail de vos
            collaborateurs.
          </p>
          <Link to="/product">
            <Button className={styles.trouvez}>
              Trouvez celui qui vous correspond!
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Catalogue;
