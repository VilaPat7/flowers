import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import '../../css/App.css';
import Home from '../home';
import MyPage from '../my';

function App() {
  const [favoriteFlowers, setFavoriteFlowers] = useState([]);

  const addToMyPage = (flower) => {
    if (!favoriteFlowers.includes(flower)) {
      setFavoriteFlowers([...favoriteFlowers, flower]);
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <NavLink to="/" className="nav-button" >Home</NavLink>
          <NavLink to="/my" className="nav-button">My</NavLink>
        </header>
        <Routes>
          <Route path="/" element={<Home addToMyPage={addToMyPage} />} />
          <Route path="/my" element={<MyPage favoriteFlowers={favoriteFlowers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
