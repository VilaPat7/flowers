import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Carousel.css';
import '../css/page.css';

Modal.setAppElement('#root'); 

const FlowerModal = ({ imageSrc, description, title, isActive, fact, care, imageFlower, alt1}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <img
        className={`images ${isActive ? 'animate' : ''}`} 
        src={imageSrc}
        alt="Flower"
        onClick={openModal}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '70%', 
            padding: '40px',
            height: '70%',
            borderColor: '#0a0a17',
            zIndex: 1000,
            background: '#0a0a17',
            color: 'aliceblue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'New Century Schoolbook, TeX Gyre Schola, serif',
            
        },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)', 
            zIndex: 1000, 
          },
        }}
      
      >
        <h2>{title}</h2>
        <div className='description-main'>
          <div className='image-description'>
            <img className='description-flower' src={imageFlower} alt={alt1}></img>
          </div>
          <div className='text-description'>
            <h3>Description</h3>
            <p>{description}</p>
            <h3>How to care for</h3>
            <p>{care}</p>
            <h3>Interesting fact </h3>
            <p>{fact}</p>
          </div>
        </div>
        <button className="sliding-button" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default FlowerModal;
