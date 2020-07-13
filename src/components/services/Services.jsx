import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import styles from './Services.module.css';

export default function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await axios.get(
          'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/services'
        );
        setServices(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getServices();
  }, []);

  if (isLoading) {
    return <Spinner color="info" />;
  }

  return (
    <Row>
      {services.map((i) => (
        <>
          <Col lg="6">
            <h1 className={styles.title1}> {i.title}</h1>
            <p>{ReactHtmlParser(i.description)}</p>
            <Link to="/contact">
              <Button className={styles.contact}>Contactez-nous</Button>
            </Link>
          </Col>
          <Col lg="6">
            <img
              className={styles.conference}
              src={i.logo}
              alt="présentation"
            />
          </Col>
        </>
      ))}
    </Row>
  );
}
