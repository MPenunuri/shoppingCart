import { useLocation } from "react-router-dom";
import SearchBar from "./NavBar/SearchBar.jsx";
import Profile from "./NavBar/Profile.jsx";
import ChangeCategoryBtn from "./NavBar/ChangeCategoryBtn.jsx";
import styles from "./NavBar/NavBar.module.css";

export default function NavBar() {
  const location = useLocation();
  return (
    <nav>
      <h1>Shopping App</h1>
      {location.pathname !== "/home" && (
        <>
          <SearchBar />
          <div className={styles.btnsContainer} aria-hidden="true">
            <Profile />
            <ChangeCategoryBtn />
          </div>
        </>
      )}
    </nav>
  );
}
