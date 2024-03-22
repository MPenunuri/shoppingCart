import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import BackgroundLayout from "../components/BackgroundLayout.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <BackgroundLayout />
    </>
  );
}

export default App;
