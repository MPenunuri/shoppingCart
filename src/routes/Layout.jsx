import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import BackgroundLayout from "../components/BackgroundLayout.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <BackgroundLayout />
    </>
  );
}
