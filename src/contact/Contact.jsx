import React from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Form,
  Button,
} from 'reactstrap';

import styles from './contact.module.css';

export default function Contact() {
  return (
    <Container fluid className={styles.div}>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className={`${styles.col} d-flex flex-column align-items-center`}>
          <h1 className={styles.title1}>Vous souhaitez nous contacter ?</h1>
          <p className={styles.title3}>Société Look up</p>
          <p className={styles.text}>lookup-france@protonmail.com</p>
          <p className={styles.text}>+33 (0) 6 88 61 93 53</p>
        </Col>
        <Col>
          <Form className="mr-3">
            <Row>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  placeholder="Nom"
                  required
                />
              </Col>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  type="firstname"
                  name="firstname"
                  id="firstname"
                  placeholder="Prénom"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Numéro de téléphone"
                  pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                  required
                />
              </Col>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  type="adress"
                  name="adress"
                  id="adress"
                  placeholder="Adresse"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Input
                  className={styles.input}
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Votre message"
                  required
                />
              </Col>
            </Row>

            <FormGroup check row>
              <Col sm={12} className={styles.inputButton}>
                <Button className={styles.inputButtonClick}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
