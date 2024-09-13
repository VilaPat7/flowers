import React, { useState } from 'react';
import FlowerModal from './page'; // Assuming FlowerModal is in the same folder
import '../css/my.css';

const MyPage = () => {
  const [flowers, setFlowers] = useState([]); // Stores the favorite flowers
  const [flowerName, setFlowerName] = useState(''); // Stores the new flower's name
  const [flowerNote, setFlowerNote] = useState(''); // Stores the note for the flower

  // Function to add a flower to the list
  const addToMyPage = (flowerTitle) => {
    console.log('addToMyPage called with:', flowerTitle);
    setFlowers([...flowers, { name: flowerTitle, note: '' }]);
  };

  const addFlower = () => {
    if (flowerName.trim()) {
      setFlowers([...flowers, { name: flowerName, note: flowerNote }]);
      setFlowerName(''); // Clear the input fields after adding
      setFlowerNote('');
    }
  };

  // Function to remove a flower from the list
  const removeFlower = (index) => {
    const updatedFlowers = flowers.filter((_, i) => i !== index);
    setFlowers(updatedFlowers);
  };

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
        <textarea
          placeholder="Add a note (optional)"
          value={flowerNote}
          onChange={(e) => setFlowerNote(e.target.value)}
        />
        
      </div>

      {/* List of favorite flowers */}
      <ul>
        {flowers.map((flower, index) => (
          <li className='list_added' key={index}>
            <h3>{flower.name}</h3>
            <button className='sliding-button' onClick={() => removeFlower(index)}>Remove</button>
            {flower.note && <p>Note: {flower.note}</p>}
          </li>
        ))}
      </ul>

      {/* Example usage of FlowerModal */}
      <FlowerModal 
        imageSrc="flower.jpg"
        title="Rose"
        description="Beautiful red rose."
        fact="Roses are popular garden plants."
        care="Water regularly."
        isActive={true}
        imageFlower="rose.jpg"
        alt1="A red rose"
        addToMyPage={addToMyPage} // Pass the function here
      />
    </div>
  );
};

export default MyPage;