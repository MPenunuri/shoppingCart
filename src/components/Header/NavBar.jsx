import { useContext } from "react";
import { UserContext } from "../UserContextProvider.jsx";
import { useLocation } from "react-router-dom";
import SearchBar from "./NavBar/SearchBar.jsx";
import Profile from "./NavBar/Profile.jsx";
import ChangeCategoryBtn from "./NavBar/ChangeCategoryBtn.jsx";
import "./NavBar/NavBar.css";

export default function NavBar() {
  const { state, dispatch } = useContext(UserContext);
  const { user, visitor, cart } = state;
  const location = useLocation();
  return (
    <nav>
      <h1>Shooping App</h1>
      {(visitor && <SearchBar />) || (user && <SearchBar />)}
      {location.pathname !== "/home" && (
        <Profile user={user} visitor={visitor} />
      )}
      {(visitor && <ChangeCategoryBtn />) || (user && <ChangeCategoryBtn />)}
    </nav>
  );
}
