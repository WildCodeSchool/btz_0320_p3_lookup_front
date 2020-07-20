import React, { useState } from 'react';
import { Form, Button, Input, Col, Row } from 'reactstrap';
import Axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import styles from './Newsletter.module.css';

toast.configure();

const defaultClient = {
  companyName: 'Newsletter',
  streetNumber: 1,
  streetName: '-',
  city: '-',
  postalCode: 1,
  email: '',
  phone: '-',
  siret: '-',
};

const Newsletter = () => {
  const [input, setInput] = useState(defaultClient);

  const notifySuccess = () => {
    toast.success('Votre inscription à la newsletter est enregistrée !', {
      position: 'middle-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = () => {
    toast.error("Erreur d'inscription!", {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const postNewsletter = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/clients`,
        input
      );
      notifySuccess();
    } catch (err) {
      notifyError();
    }

    setInput(defaultClient);
  };

  return (
    <>
      <Form onSubmit={postNewsletter}>
        <Row className={styles.newsForm}>
          <Col md="12" lg="4">
            <p className={styles.newsText}>S&apos;inscire à la newsletter</p>
          </Col>
          <Col lg="4" md="6" sm="8" xs="10">
            <Input
              className={styles.newsInput}
              type="text"
              value={input.email}
              placeholder="email"
              onChange={(e) =>
                setInput({
                  ...input,
                  email: e.target.value,
                })
              }
            />
          </Col>
          <Col lg="4" md="12">
            <Button type="submit" className={styles.newsButton}>
              Envoyer
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Newsletter;
