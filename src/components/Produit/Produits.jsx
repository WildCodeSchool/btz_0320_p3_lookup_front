import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Spinner } from 'reactstrap';
import Description from './Description';
import ImageProduit from './ImageProduit';
import style from './Produits.module.css';
import Avis from './Avis';

const Produits = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const right = {
    float: 'right',
    translate: '25%',
  };
  const left = {
    float: 'left',
    translate: '-25%',
  };
  // const whiteBackground = {
  //   width: '75vw',
  // };
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
    <Container>
      {productData.map((product) => (
        <>
          <ImageProduit
            buttonLabel="Demande de devis"
            key={product.uuid}
            picture={product.picture}
            description={product.description}
            name={product.name}
          />
          <h1 className={style.title}>{product.name}</h1>
          <Description
            floatRight={right}
            floatLeft={left}
            backgroundBlue={blueBackground}
            key={product.uuid}
            uuid={product.uuid}
          />
          <Avis />
        </>
      ))}
    </Container>
  );
};

export default Produits;
