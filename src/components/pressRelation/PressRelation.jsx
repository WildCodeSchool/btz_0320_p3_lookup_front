import React, { useState, useEffect } from 'react';
import { Row, Container, Spinner } from 'reactstrap';
import axios from 'axios';
import Press from './Press';

export default function PressRelation() {
  const [isLoading, setIsLoading] = useState(true);
  const [presse, setPresse] = useState([]);

  useEffect(() => {
    const getPress = async () => {
      try {
        const res = await axios.get(
          'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/press'
        );
        setPresse(res.data);
      } catch (error) {
        console.log(error);
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
        {presse.map((relation) => {
          return (
            <Press image={relation.picture} texte={relation.description} />
          );
        })}
      </Row>
    </Container>
  );
}
