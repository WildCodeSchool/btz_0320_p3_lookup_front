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
        <Col lg={{ size: 8, offset: 2 }} md={{ size: 8, offset: 2 }}>
          <Row className="d-flex align-items-center">
            {partner.map((i) => (
              <Col>
                <a href={i.title} target="_blank" rel="noopener noreferrer">
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
      <Row className={`d-flex justify-content-center ${styles.footertext}`}>
        Creé en 2020 par LookUp
      </Row>
    </footer>
  );
}
