import '../css/Carousel.css';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imageFlower1 from '../image/flower1.png';
import imageFlower2 from '../image/flower2.png';
import imageFlower3 from '../image/flower3.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="images" src={imageFlower1} alt="First flower" />
        </div>
        <div>
          <img className="images" src={imageFlower2} alt="Second flower" />  
        </div>
        <div>
          <img className="images" src={imageFlower3} alt="Third flower" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
