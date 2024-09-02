import '../css/Carousel.css';
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imageFlower1 from '../image/flower1.png';
import imageFlower2 from '../image/flower2.png';
import imageFlower3 from '../image/flower3.png';
import FlowerModal from '../components/page';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (current, next) => setActiveSlide(next),

  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          {/* <img
            className={`images ${activeSlide === 0 ? 'animate' : ''}`}
            src={imageFlower1}
            alt="First flower"
          /> */}
          <FlowerModal
            imageSrc={imageFlower1}
            isActive={activeSlide === 0} // Pass the isActive prop to trigger animation
            description="This is a beautiful flower."
          />
        </div>
        <div>
          <FlowerModal
            imageSrc={imageFlower2}
            isActive={activeSlide === 1} // Pass the isActive prop to trigger animation
            description="This is a beautiful flower."
          />
        </div>
        <div>
          <FlowerModal
            imageSrc={imageFlower3}
            isActive={activeSlide === 2} // Pass the isActive prop to trigger animation
            description="This is a beautiful flower."
          />
        </div>
      </Slider>
    </div>
  );
};


export default Carousel;
