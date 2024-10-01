import React, { useState, useEffect } from "react";
import "./Carousel.scss";
const Carousel = ({ photos }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length > 1) {
      const interval = setInterval(
        () => setIndex((prevIndex) => (prevIndex + 1) % photos.length),
        3500
      );
      return () => clearInterval(interval);
    }
  }, [photos.length]);

  const nextSlide = () => setIndex((index + 1) % photos.length);
  const prevSlide = () => setIndex((index - 1 + photos.length) % photos.length);
  return (
    <section className="carousel">
      <img
        className="carousel__img"
        src={photos[index]}
        alt={`Photo ${index + 1} du logement`}
      />
      {photos.length > 1 && (
        <>
          <button
            className="carousel__button carousel__button--prev"
            onClick={prevSlide}
          >
            <img src="/carousel_arrow_prev.svg" alt="Previous" />
          </button>
          <button
            className="carousel__button carousel__button--next"
            onClick={nextSlide}
          >
            <img src="/carousel_arrow_next.svg" alt="Next" />
          </button>
          <p className="carousel__counter">
            {index + 1} / {photos.length}
          </p>
        </>
      )}
    </section>
  );
};
export default Carousel;
