import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    setTimer(intervalId);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timer);
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    setTimer(intervalId);
  };

  return (
    <>
      <div className="carousel d-flex justify-content-center align-items-center">
        <div className="carousel-arrows">
          <FaArrowLeft className="carousel-arrow mx-5" onClick={handlePrev} />
        </div>
        <div className="carousel-images animate-animated animate-fadeIn">
          <img
            src={images[currentIndex]}
            alt={`carousel item ${currentIndex}`}
            className="carousel-image active mx-5"
          />
        </div>
        <div className="carousel-arrows">
          <FaArrowRight className="carousel-arrow mx-5" onClick={handleNext} />
        </div>
      </div>
      <div className="carousel-controls d-flex justify-content-center align-items-center w-25 mx-auto">
        <div className="carousel-dots">
          {images.map((image, index) => (
            <FaCircle
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
