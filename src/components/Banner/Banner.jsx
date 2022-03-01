import { useEffect } from "react";
import { useState } from "react";
import classes from "./Banner.module.css";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setBannerMovie(response.data.results[0]);
      });
  }, []);
  // console.log(bannerMovie);

  return (
    <div
      style={{
        backgroundImage: `url(${
          bannerMovie ? imageUrl + bannerMovie.backdrop_path : ""
        })`, backgroundRepeat:"no-repeat", backgroundSize:"cover",
      }}
    >
      <div className={classes.banner}>
        <div className={classes.content}>
          <h1 className={classes.title}>{bannerMovie ? bannerMovie.title : ""}</h1>
          <div className={classes.banner_buttons}>
            <button className={classes.button}>Watch now</button>
            <button className={classes.button}>My Playlist</button>
          </div>
          <h1 className={classes.description}>
            {bannerMovie ? bannerMovie.overview : ""}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
