import React from 'react';
import Carousel from '../template/Carousel';
import '../css/App.css';

function Home() {
  return (
    <>
      <div className="title">
        <h2 className='main_title'>Flowers</h2>
      </div>
      <div className="carousel-wrapper">
        <Carousel />
      </div>
    </>
  );
}

export default Home;
