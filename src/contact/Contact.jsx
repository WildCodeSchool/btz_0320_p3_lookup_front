import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Form,
  Button,
  Spinner,
} from 'reactstrap';
import Axios from 'axios';
import styles from './contact.module.css';

export default function Contact() {
  const [lookup, setLookup] = useState([]);
  const [client, setClient] = useState({
    companyName: '-',
    streetNumber: 1,
    streetName: '-',
    city: '-',
    postalCode: 1,
    email: '-',
    phone: '-',
    siret: '-',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getLookup = async () => {
      try {
        const res = await Axios.get(
          'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/admin/39e68df2-1f3f-42a6-9c73-1826db3ad3f3'
        );
        setLookup(res.data);
      } catch (err) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getLookup();
  }, []);

  const postClient = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/clients',
        client
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <Spinner color="info" />;
  }

  return (
    <Container fluid className={styles.div}>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className={styles.col}>
          <h1 className={styles.title1}>Vous souhaitez nous contacter ?</h1>
          <p className={styles.title3}>Société {lookup.companyName}</p>
          <p className={styles.text}>{lookup.email}</p>
          <p className={styles.text}>{lookup.phone}</p>
        </Col>
        <Col>
          <Form className="mr-3" onSubmit={(e) => postClient(e)}>
            <Row>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  onChange={(e) => {
                    setClient({ ...client, city: e.target.value });
                  }}
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Nom"
                  required
                />
              </Col>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  onChange={(e) => {
                    setClient({ ...client, companyName: e.target.value });
                  }}
                  type="text"
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
                  onChange={(e) => {
                    setClient({ ...client, phone: e.target.value });
                  }}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Numéro de téléphone"
                  // pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                  required
                />
              </Col>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  onChange={(e) => {
                    setClient({ ...client, streetName: e.target.value });
                  }}
                  type="text"
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
                  onChange={(e) => {
                    setClient({ ...client, siret: e.target.value });
                  }}
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Votre message"
                  required
                />
              </Col>
            </Row>

            <FormGroup check row>
              <Col sm={12} className={styles.input}>
                <Button>Envoyer</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
