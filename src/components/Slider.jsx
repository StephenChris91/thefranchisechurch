// Import React
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// Import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';

// Import Swiper styles
// import 'swiper/react/modules/effect-coverflow/effect-coverflow.min.css';
// import 'swiper/react/modules/pagination/pagination.min.scss';
// import 'swiper/react/modules/navigation/navigation.min.scss';


// Initialize Swiper core
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

// Import your slide images
import { slideImages } from './utils/slideImages';


function Slider() {
  return (
    <div className="container">
      <h1 className="heading">Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={6}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        // pagination={{ clickable: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="swiper_container"
      >
        
        {slideImages.map((slideImage, index) => (
          <SwiperSlide key={index}>
            <img src={slideImage} alt="slide_image" />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
