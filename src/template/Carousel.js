import '../css/Carousel.css';
import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const style = {
    background: 'blue',
  };
  return (
    <div className="App">
      <p style={style}>jjjjjjjj</p>
    </div>
    // <Slider {...settings}>
    //   <div>
    //     <img src='https://via.placeholder.com/350x150' alt='slide-1' />
    //   </div>
    //   <div>
    //     <img src='https://via.placeholder.com/350x150' alt='slide-2' />
    //   </div>
    //   <div>
    //     <img src='https://via.placeholder.com/350x150' alt='slide-3' />
    //   </div>
    // </Slider>
  );
};

export default Carousel;
