
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar_container}>
      <div>
        <img
          className={classes.navbar_logo}
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="logo"
        />
      </div>
      <div className={classes.navbar_links}>
        <h4>Home</h4>
        <h4>TV Shows</h4>
        <h4>Movies</h4>
        <h4>My List</h4>
      </div>
      <div>
        <img
          className={classes.navbar_avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
