import { useContext, useRef, useState, useEffect } from "react";
import { UserContext } from "../components/UserContextProvider.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Login from "../components/Login.jsx";
import Loading from "../components/Loading.jsx";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { state, dispatch } = useContext(UserContext);
  const { user } = state;

  const dataUser = useRef({ user: null, password: null });

  const [userValidation, setUserValidation] = useState({
    dataSend: false,
    user: null,
    password: null,
  });

  const { isPending, error, data } = useQuery({
    queryKey: ["users_data"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/users").then((res) => res.data),
  });

  useEffect(() => {
    if (userValidation.dataSend === true && data !== undefined) {
      const user = data.find((i) => {
        return (
          i.email.trim() === dataUser.current.user.trim() ||
          i.username.trim() === dataUser.current.user.trim()
        );
      });
      if (user) {
        if (user.password === dataUser.current.password) {
          dispatch({ type: "SET_USER", payload: true });
        } else {
          setUserValidation({ ...state, user: true, password: false });
        }
      } else {
        setUserValidation({ ...state, user: false, password: false });
      }
    }
  }, [userValidation, data, state, dispatch]);

  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      {user ? (
        <Navigate to="/products" replace={true} />
      ) : (
        <Login
          dataUser={dataUser}
          userValidation={userValidation}
          setUserValidation={setUserValidation}
        />
      )}
    </>
  );
}
