import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ onSearch, logout }) {
  function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
}

  return (
    <nav className={styles["nav-container"]}>
      <button
      style={{margin:".5rem"}}>
        <NavLink
          to="/home"
          className={styles["nav-link"]}
          activeclassname={styles.active}
        >
          Home
        </NavLink>
      </button>

      <button
      style={{margin:".5rem"}}>
        <NavLink
          to="/about"
          className={styles["nav-link"]}
          activeclassname={styles.active}
        >
          About
        </NavLink>
      </button>

      <button
      style={{margin:".5rem"}}>
        <NavLink
          to="/favorites"
          className={styles["nav-link"]}
          activeclassname={styles.active}
        >
          Favorites
        </NavLink>
      </button>

      <SearchBar onSearch={onSearch} style={{margin:".5rem"}}/>

      <button
        style={{margin:".5rem"}}
        onClick={() => onSearch(getRandom(1, 826))}
        className={styles["searchButton"]}>
        Random 
      </button> 

      <button
        style={{margin:".5rem"}}
        className={styles["nav-link"]}
        // activeclassName={styles.active}
        onClick={logout}
      >
        LogOut
      </button>
    </nav>
  );
}
