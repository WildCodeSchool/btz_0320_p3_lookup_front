import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'reactstrap';
import axios from 'axios';
import styles from './Footer.module.css';

export default function MyFooter() {
  const [isLoading, setIsLoading] = useState(true);
  const [partner, setPartner] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

  useEffect(() => {
    const getPartner = async () => {
      try {
        const res = await axios.get(
          'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/partenaires'
        );
        setPartner(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getPartner();
  }, []);

  if (isLoading) {
    return <Spinner color="info" />;
  }

  return (
    <footer>
      <Row>
        <Col lg={{ size: 12 }} md={{ size: 12 }}>
          <hr className={styles.topLine} />
        </Col>
        <Col lg={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <Row>
            {partner.map((i) => (
              <Col>
                <a href={i.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className={styles.partners}
                    src={i.logo}
                    alt={i.description}
                  />
                </a>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className={styles.footertext}>
        <p className={styles.signature}>
          {' '}
          Creé en 2020 par{' '}
          <a
            href="https://www.linkedin.com/in/marion-hourdou/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Marion
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/adelebobinparra/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Adele
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/marc-schiavone/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Marc
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/tommy-chinn/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tommy
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/jp-susini-rav%C3%A9-0170b61a4/"
            rel="noopener noreferrer"
            target="_blank"
          >
            JP
          </a>
        </p>
      </Row>
    </footer>
  );
}
