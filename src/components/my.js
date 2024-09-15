import React, { useState } from 'react';
import FlowerModal from './page'; 
import '../css/my.css';

const MyPage = () => {
  const [flowers, setFlowers] = useState([]); 
  const [flowerName, setFlowerName] = useState(''); 
  const [flowerNote, setFlowerNote] = useState(''); 
  const [showNoteModal, setShowNoteModal] = useState(false); 
  const [selectedFlowerIndex, setSelectedFlowerIndex] = useState(null); 

  const addToMyPage = (flowerTitle) => {
    console.log('addToMyPage called with:', flowerTitle);
    setFlowers([...flowers, { name: flowerTitle, note: '' }]);
  };

  const maxNoteLength = 200;
  const addFlower = () => {
    if (flowerName.trim()) {
      setFlowers([...flowers, { name: flowerName, note: '' }]);
      setFlowerName(''); 
      setFlowerNote('');
    }
  };
 
  const removeFlower = (index) => {
    const updatedFlowers = flowers.filter((_, i) => i !== index);
    setFlowers(updatedFlowers);
  };

  const deleteNote = (index) => {
    const updatedFlowers = [...flowers];
    updatedFlowers[index].note = '';
    setFlowers(updatedFlowers);
  };

  const openNoteModal = (index) => {
    setSelectedFlowerIndex(index);
    setShowNoteModal(true);
  };

  const closeNoteModal = () => {
    setShowNoteModal(false);
    setFlowerNote(''); 
  };

  const saveNote = () => {
    if (selectedFlowerIndex !== null) {
      const updatedFlowers = [...flowers];
      updatedFlowers[selectedFlowerIndex].note = flowerNote;
      setFlowers(updatedFlowers);
      closeNoteModal();
    }
  };
  // var flower_from = <FlowerModal addToMyPage={addToMyPage} />
  
  return (
    <div className='my_page'>
      <h2 className='main-title'>My Favorite Flowers</h2>
        
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
      
     
      {/* <FlowerModal addToMyPage={addToMyPage} /> */}
    </div>
  );
};

export default MyPage;