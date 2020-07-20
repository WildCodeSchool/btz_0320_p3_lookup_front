import React, { useState, useEffect } from 'react';
import { Row, Container, Spinner, Col } from 'reactstrap';
import axios from 'axios';
import Press from './Press';

export default function PressRelation() {
  const [isLoading, setIsLoading] = useState(true);
  const [presse, setPresse] = useState([]);
  // eslint-disable-next-line no-unused-vars
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

  return (
    <Container fluid="lg" className="mt-5">
      <Row>
        <Row>
          <Col>
            <h1>Il parle de nous ...</h1>
          </Col>
        </Row>
        <Row>
          {presse.map((relation) => {
            return (
              <Press
                image={relation.picture}
                texte={relation.description}
                description={relation.description}
              />
            );
          })}
        </Row>
      </Row>
    </Container>
  );
}
