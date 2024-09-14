import React, { useState } from 'react';
import FlowerModal from './page'; // Assuming FlowerModal is in the same folder
import '../css/my.css';

const MyPage = () => {
  const [flowers, setFlowers] = useState([]); // Stores the favorite flowers
  const [flowerName, setFlowerName] = useState(''); // Stores the new flower's name
  const [flowerNote, setFlowerNote] = useState(''); // Stores the note for the flower
  const [showNoteModal, setShowNoteModal] = useState(false); // Controls the visibility of the note modal
  const [selectedFlowerIndex, setSelectedFlowerIndex] = useState(null); 

  // Function to add a flower to the list
  const addToMyPage = (flowerTitle) => {
    console.log('addToMyPage called with:', flowerTitle);
    setFlowers([...flowers, { name: flowerTitle, note: '' }]);
  };

  const maxNoteLength = 200;
  const addFlower = () => {
    if (flowerName.trim()) {
      setFlowers([...flowers, { name: flowerName, note: '' }]);
      setFlowerName(''); // Clear the input fields after adding
      setFlowerNote('');
    }
  };

  // Function to remove a flower from the list
  const removeFlower = (index) => {
    const updatedFlowers = flowers.filter((_, i) => i !== index);
    setFlowers(updatedFlowers);
  };

  // Function to delete the note for a specific flower
  const deleteNote = (index) => {
    const updatedFlowers = [...flowers];
    updatedFlowers[index].note = '';
    setFlowers(updatedFlowers);
  };

  const openNoteModal = (index) => {
    setSelectedFlowerIndex(index);
    setShowNoteModal(true);
  };

  // Function to close the note modal
  const closeNoteModal = () => {
    setShowNoteModal(false);
    setFlowerNote(''); // Clear the note input when closing the modal
  };

  // Function to save the note for a specific flower
  const saveNote = () => {
    if (selectedFlowerIndex !== null) {
      const updatedFlowers = [...flowers];
      updatedFlowers[selectedFlowerIndex].note = flowerNote;
      setFlowers(updatedFlowers);
      closeNoteModal();
    }
  };
  var flower_from = <FlowerModal addToMyPage={addToMyPage} />
  
  return (
    <div className='my_page'>
      <h2>My Favorite Flowers</h2>
        
      {/* Input to add a new flower */}
      <div className='inputs'>
        <div className='add_flower'>
          <input
            type="text"
            placeholder="Flower name"
            value={flowerName}
            onChange={(e) => setFlowerName(e.target.value)}
          />
          <button className='sliding-button' onClick={addFlower}>Add Flower</button>
        </div>
      </div>

      {/* List of favorite flowers */}
      <ul>
        {flowers.map((flower, index) => (
          <li className='list_added' key={index}>
            <h3>{flower.name}</h3>
            <button className='sliding-button' onClick={() => removeFlower(index)}>Remove</button>
            {flower.note ? (
              <>
                <p className='notion-added'>Note: {flower.note}</p>
                <button className='sliding-button' onClick={() => deleteNote(index)}>Delete Note</button>
              </>
            ) : (
              <button className='sliding-button' onClick={() => openNoteModal(index)}>Add Note</button>
            )}
          </li>
        ))}
      </ul>

      {/* Modal for adding/editing notes */}
      {showNoteModal && (
        <div className='note-modal'>
          <div className='note-modal-content'>
            <h3>Add Note</h3>
            <textarea
              placeholder="Add a note (max 200 characters)"
              value={flowerNote}
              onChange={(e) => setFlowerNote(e.target.value.slice(0, maxNoteLength))}
              maxLength={maxNoteLength}
            />
            <div className='note-modal-buttons'>
              <button className='sliding-button' onClick={saveNote}>Save</button>
              <button className='sliding-button' onClick={closeNoteModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Render FlowerModal and pass the addToMyPage function */}
      {/* <FlowerModal addToMyPage={addToMyPage} /> */}
    </div>
  );
};

export default MyPage;