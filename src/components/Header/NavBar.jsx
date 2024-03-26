import SearchBar from "./NavBar/SearchBar.jsx";
import Profile from "./NavBar/Profile.jsx";
import ChangeCategoryBtn from "./NavBar/ChangeCategoryBtn.jsx";
import "./NavBar/NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <h1>Shooping App</h1>
        <SearchBar />
        <Profile />
        <ChangeCategoryBtn />
      </nav>
    </>
  );
}
