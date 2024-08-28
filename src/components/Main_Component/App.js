import '../../css/App.css';
import Carousel from '../../template/Carousel';

function App() {
  return (
    <div className="App">
        <div className="title">
          <h2>Flowers</h2>
        </div>
        <div className="carousel-wrapper">
          <Carousel />
        </div>
      </div>
  );
}

export default App;
