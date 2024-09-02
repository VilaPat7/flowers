// FlowerModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Carousel.css';

Modal.setAppElement('#root'); // Necessary for accessibility reasons

const FlowerModal = ({ imageSrc, description, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <img
        className={`images ${isActive ? 'animate' : ''}`} // Apply animation class conditionally
        src={imageSrc}
        alt="Flower"
        onClick={openModal}
        style={{ cursor: 'pointer' }}
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
            width: '70%', // Adjust as needed
            padding: '20px',
            height: '70%',
            borderRadius: '10px',
            zIndex: 1000, // Ensure it overlaps the carousel
            background: '#01040d',
            color: 'aliceblue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'New Century Schoolbook, TeX Gyre Schola, serif',

        },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)', // Dark overlay
            zIndex: 1000, // Ensure the overlay also overlaps
          },
        }}
      >
        <h2>Flower Description</h2>
        <p>{description}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default FlowerModal;
