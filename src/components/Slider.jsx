// Carousel.js
import React, { useState, useEffect } from 'react';
// import './Carousel.scss';

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Slider = ({ sliders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 10000); // Change the interval as needed (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="carousel-container">
      <div className="carousel-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {sliders.map((image, index) => (
          <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <FaChevronLeft onClick={goToPrevSlide} className='carousel-icon' />
        <FaChevronRight onClick={goToNextSlide} className='carousel-icon' />
      </div>
    </div>
  );
};

export default Slider;
