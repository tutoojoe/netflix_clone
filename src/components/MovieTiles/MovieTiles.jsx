import { useState, useEffect } from "react";
import classes from "./MovieTiles.css";
import axios from "axios";
import { imageUrl, API_KEY } from "../../constants/constants";

const MovieTile = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);

  const movieHandler = (id) => {
    console.log(id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array Empty");
        }
      });
  };

  return (
    <div className="tile_container">
      <h3>{props.title}</h3>
      <div className="tiles">
        {movies.map((obj) => (
          <img
            onClick={() => movieHandler(obj.id)}
            className={props.isSmall ? "smallTile" : "tile"}
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieTile;
