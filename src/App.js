import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import MovieTile from "./components/MovieTiles/MovieTiles";
import { originals, action } from "./constants/urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MovieTile url={originals} title={'Netflix Originals'} />
      <MovieTile url={action} title={'Action Movies'} isSmall />
      {/* <MovieTile url={drama} title={'Drama'} /> */}
     
    </div>
  );
}

export default App;
