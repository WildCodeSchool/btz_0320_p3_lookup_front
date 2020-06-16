import React from 'react';
import { Row, Col, Card, CardImg, CardText, Container } from 'reactstrap';
import styles from './PressRelation.module.css';

export default function PressRelation() {
  return (
    <Container fluid="lg">
      <h1>Relation presse</h1>
      <Row>
        <Col sm="3">
          <Card className={styles.card}>
            <CardImg
              className={styles.img_card}
              top
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/9/98/France_Bleu_logo_2015.svg/1200px-France_Bleu_logo_2015.svg.png"
              alt="image france bleu"
            />
            <CardText>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique laudantium magnam dolor ab! Corrupti .
              </p>
            </CardText>
          </Card>
        </Col>
        <Col sm="3">
          <Card className={styles.card}>
            <CardImg
              className={styles.img_card}
              top
              src="https://www.iae-france.fr/wp-content/uploads/2018/12/20181206-LEtudiant.png"
              alt="image l'étudiant"
            />
            <CardText>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique laudantium magnam dolor ab! Corrupti .
              </p>
            </CardText>
          </Card>
        </Col>
        <Col sm="3">
          <Card className={styles.card}>
            <CardImg
              className={styles.img_card}
              top
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Europe_1_logo_%282010%29.svg/1280px-Europe_1_logo_%282010%29.svg.png"
              alt="image europe 1"
            />
            <CardText>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique laudantium magnam dolor ab! Corrupti .
              </p>
            </CardText>
          </Card>
        </Col>
        <Col sm="3">
          <Card className={styles.card}>
            <CardImg
              className={styles.img_card}
              top
              src="https://www.offremedia.com/sites/default/files/vignette/article/nl1608-logo-capital.png"
              alt="image capitale"
            />
            <CardText>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique laudantium magnam dolor ab! Corrupti .
              </p>
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
