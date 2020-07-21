import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Col, Row, Container } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';

import Description from './Description';
import ImageProduit from './ImageProduit';
import style from './Produits.module.css';
import Avis from './Avis';

const Produits = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { uuid } = useParams();

  const blueBackground = {
    backgroundColor: 'lightblue',
  };

  const getDataProduct = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products/${uuid}`
      );
      setProductData(res.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getDataProduct();
  }, [uuid]);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <Row>
      <Col>
        <ImageProduit
          buttonLabel="Demande de devis"
          picture={productData.picture}
          description={productData.description}
          name={productData.name}
        />
        <Container>
          <h1 className={style.title}>{ReactHtmlParser(productData.name)}</h1>
        </Container>
        <Description backgroundBlue={blueBackground} uuid={productData.uuid} />
        <Avis />
      </Col>
    </Row>
  );
};

export default Produits;
