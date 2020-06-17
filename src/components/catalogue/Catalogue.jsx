/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardBody,
  Row,
  Col,
} from 'reactstrap';
import styles from './Catalogue.module.css';

const inclinaison2 = require('./Inclinaison2.png');

const Catalogue = () => {
  return (
    <div>
      <Row className={styles.font}>
        <Card className={styles.card}>
          <CardBody>
            <CardTitle>
              <h2>Découvrez</h2>
            </CardTitle>
            <CardText>
              <p className={styles.subtitle}>
                Des solutions ergonomiques pour le monde d'aujourd'hui et
                dedemain
              </p>
            </CardText>
          </CardBody>
        </Card>
      </Row>
      <Row>
        <CardGroup className={styles.catalogue}>
          <Col sm="4">
            <Card className={styles.card}>
              <CardImg
                className={styles.inclinaison}
                src={inclinaison2}
                alt="support incliné"
              />
            </Card>
          </Col>
          <Col sm="4">
            <Card className={styles.card}>
              <CardBody className={styles.gamme}>
                <CardTitle className={styles.titreTrois}>
                  Notre gamme de produits ergonomiques
                </CardTitle>
                <CardText>
                  Proposer des produits accessibles et adaptés à tous les usages
                  permettant d'améliorer simplement les conditions de travail de
                  vos collaborateurs.
                </CardText>
                <Button className={styles.trouvez}>
                  Trouvez celui qui vous correspond!
                </Button>
              </CardBody>
            </Card>
          </Col>
        </CardGroup>
      </Row>
    </div>
  );
};

export default Catalogue;
