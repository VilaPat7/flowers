import React, { useState } from 'react';
import '../css/Carousel.css';
import '../css/page.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');  // Ensure the root element is defined for accessibility

const FlowerModal = ({ imageSrc, description, title, isActive, fact, care, imageFlower, alt1, addToMyPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleAddToMyPage = () => {
    console.log('handleAddToMyPage called with:', title);
    if (addToMyPage) {
      addToMyPage(title);  // Pass the title to the function to add it to "My Page"
    }
    closeModal();  // Close the modal after adding
  };

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
            <div className='interesting-fact'>
              <h3>Interesting fact </h3>
              <p>{fact}</p>
            </div>
          </div>
        </div>
        <button className="sliding-button1" onClick={closeModal}>Close</button>
        <button className="sliding-button1" onClick={handleAddToMyPage}>Add to My</button>
      </Modal>
    </div>
  );
};

export default FlowerModal;