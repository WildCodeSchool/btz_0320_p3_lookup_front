import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Col, Row, Container } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

import Description from './Description';
import ImageProduit from './ImageProduit';
import style from './Produits.module.css';
import Avis from './Avis';

const Produits = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const blueBackground = {
    backgroundColor: 'lightblue',
  };

  const getDataProduct = async () => {
    try {
      const res = await axios.get(
        'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products'
      );
      setProductData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <Row>
      <Col>
        {productData.map((product) => (
          <>
            <ImageProduit
              buttonLabel="Demande de devis"
              key={product.uuid}
              picture={product.picture}
              description={product.description}
              name={product.name}
            />
            <Container>
              <h1 className={style.title}>{ReactHtmlParser(product.name)}</h1>
            </Container>
            <Description
              backgroundBlue={blueBackground}
              key={product.uuid}
              uuid={product.uuid}
            />
            <Avis />
          </>
        ))}
      </Col>
    </Row>
  );
};

export default Produits;
