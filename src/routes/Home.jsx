import { useContext } from "react";
import { UserContext } from "../components/UserContextProvider.jsx";
import Login from "../components/Login.jsx";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { state, dispatch } = useContext(UserContext);
  const { user } = state;

  return (
    <>
      {user ? (
        <Navigate to="/home/cart/setup" replace={true} />
      ) : (
        <Login state={state} dispatch={dispatch} />
      )}
    </>
  );
}
