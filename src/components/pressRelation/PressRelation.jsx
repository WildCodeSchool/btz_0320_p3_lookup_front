import React, { useState, useEffect } from 'react';
import { Row, Container, Spinner, Col } from 'reactstrap';
import axios from 'axios';
import Press from './Press';
import style from './Press.module.css';

export default function PressRelation() {
  const [isLoading, setIsLoading] = useState(true);
  const [presse, setPresse] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getPress = async () => {
      try {
        const res = await axios.get(
          'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/press'
        );
        setPresse(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getPress();
  }, []);

  if (isLoading) {
    return <Spinner color="info" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container fluid="lg" className="mt-5">
      <Row>
        <Col
          lg={{ size: 8, offset: 2 }}
          md={{ size: 8, offset: 2 }}
          className={style.title}
        >
          <h2>Ils parlent de nous ...</h2>
        </Col>
        <Col lg={{ size: 12 }} md={{ size: 12 }}>
          <Row className="justify-content-center">
            {presse.map((relation) => {
              return (
                <Col lg={{ size: 2 }} md={{ size: 2 }} xs>
                  <Press
                    image={relation.picture}
                    texte={relation.description}
                    description={relation.description}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
