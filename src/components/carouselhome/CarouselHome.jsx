import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Spinner,
} from 'reactstrap';
import axios from 'axios';
import styles from './CarouselHome.module.css';

const CarouselHome = () => {
  const [carousels, setCarousels] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

  useEffect(() => {
    const getCarousels = async () => {
      try {
        const res = await axios.get(
          'https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/carousels/'
        );
        setCarousels(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setisLoading(false);
      }
    };
    getCarousels();
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === carousels.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carousels.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carousels.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.picture}
        className={styles.carouselitem}
      >
        <img src={item.picture} alt={item.altText} />
        <CarouselCaption />
      </CarouselItem>
    );
  });

  if (isLoading) {
    return <Spinner color="info" />;
  }
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={carousels}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselHome;
