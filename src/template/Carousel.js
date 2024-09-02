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
            alt="Rose"
            title="Rose"
            description="An umbrella name for species and varieties of the genus Rósa, 
            cultivated by humans and growing in the wild."
            fact="According to the Talmud, pink roses were the only flowers allowed to grow in Jerusalem."
            care="After trimming the stems and leaves, 
            place the flowers in a vase of cool water, giving them time to adapt to room temperature."
            imageFlower={imageFlower1}
            alt1="Rose"
          />
        </div>
        <div>
          <FlowerModal
            imageSrc={imageFlower2}
            isActive={activeSlide === 1} // Pass the isActive prop to trigger animation
            alt="Cosmea"
            title="Cosmea"
            description="Cosmea (Cosmos) is a genus of beautifully flowering plants of the Compound family."
            fact="In nature there is a variety of “chocolate cosmos” in the summer period this 
            flower has a pronounced smell of chocolate with vanilla."
            care="You don't have to take care of cosmos - it will still be a delight for many months."
            imageFlower={imageFlower2}
            alt1="Cosmea"
          />
        </div>
        <div>
          <FlowerModal
            imageSrc={imageFlower3}
            alt="Chamomile"
            isActive={activeSlide === 2} // Pass the isActive prop to trigger animation
            title="Chamomile"
            description="Chamomile is a perennial, frost-resistant, light-loving herbaceous plant with a height of 50-80 cm."
            fact="Before the advent of modern pigments, women used chamomile decoction to lighten their strands and give them a golden color."
            care="Systematically add humus and organic matter to the soil where chamomile plants grow, and feed the plants by adding mineral nutrition to the soil for flowering plants."
            imageFlower={imageFlower3}
            alt1="Chamomile"
          />
        </div>
      </Slider>
    </div>
  );
};


export default Carousel;
