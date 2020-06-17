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
      <Row>
        <Col>
          <Container>
            <Row>
              <Col className={styles.col}>
                <h1>Vous souhaitez nous contactez ?</h1>
                <h3>Société Look up</h3>
                <h3>lookup-france@protonmail.com</h3>
                <h3>+33 (0) 6 88 61 93 53</h3>
              </Col>
              <Col className={styles.col}>
                <Form>
                  <Row>
                    <Col sm={6}>
                      <Input
                        type="lastname"
                        name="lastname"
                        id="lastname"
                        placeholder="Nom"
                        required
                      />
                    </Col>
                    <Col sm={6}>
                      <Input
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
                        type="adress"
                        name="adress"
                        id="adress"
                        placeholder="Adresse"
                      />
                    </Col>
                  </Row>
                  <FormGroup check row>
                    <Col sm={12}>
                      <Input
                        type="textarea"
                        name="message"
                        id="message"
                        placeholder="Votre message"
                        required
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup check row>
                    <Col sm={12}>
                      <Button>Submit</Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
