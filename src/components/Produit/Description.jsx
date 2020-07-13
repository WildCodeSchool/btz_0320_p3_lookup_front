import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

import DescriptionCard from './DescriptionCard';

function Description({ floatLeft, floatRight, backgroundBlue, uuid }) {
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getProductInfo = async () => {
    try {
      const res = await Axios.get(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products/${uuid}/products_info`
      );
      setProductInfo(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {productInfo.map((productI) => (
        <>
          <DescriptionCard
            key={productI.uuid}
            description={productI.description}
            description2={productI.description2}
            description3={productI.description3}
            picture={productI.picture}
            picture2={productI.picture2}
            picture3={productI.picture3}
            floatLeft={floatLeft}
            floatRight={floatRight}
            backgroundBlue={backgroundBlue}
            title={productI.title}
          />
        </>
      ))}
    </>
  );
}

Description.propTypes = {
  floatLeft: PropTypes.string.isRequired,
  floatRight: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  backgroundBlue: PropTypes.string.isRequired,
};

export default Description;
