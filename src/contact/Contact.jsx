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
import { toast } from 'react-toastify';
import styles from './contact.module.css';

export default function Contact() {
  const [lookup, setLookup] = useState([]);
  const [clientMail, setClientMail] = useState({
    name: '-',
    surname: 1,
    phone: '-',
    adresse: '-',
    message: '-',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const notifySuccess = () => {
    toast.success('email bien envoye !', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyError = () => {
    toast.error('Un probleme est survenu !', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
      await Axios.post('http://localhost:8000/sendMail', {
        html: `<p><b>Nom :</b> ${clientMail.name},</p>
        <p><b>Prenom :</b> ${clientMail.surname},</p>
        <p><b>Telephone :</b> ${clientMail.phone},</p>
        <p><b>Adresse :</b> ${clientMail.adresse},</p>
        <p><b>MESSAGE:</b>
 ${clientMail.message}</p>`,
        subject: `Mail de contact > Lookup.fr de MR/Mme ${clientMail.surname}  ${clientMail.name}`,
        emailTo: 'marco.sch4064@gmail.com',
      });
      notifySuccess();
    } catch (err) {
      notifyError();
    }
  };

  if (isLoading) {
    return <Spinner color="info" />;
  }

  return (
    <Container fluid className={styles.div}>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className={`${styles.col} d-flex flex-column align-items-center`}>
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
                    setClientMail({ ...clientMail, name: e.target.value });
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
                    setClientMail({ ...clientMail, surname: e.target.value });
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
                    setClientMail({ ...clientMail, phone: e.target.value });
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
                    setClientMail({ ...clientMail, adresse: e.target.value });
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
                    setClientMail({ ...clientMail, message: e.target.value });
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
