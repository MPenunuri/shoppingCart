import { useContext, useEffect } from "react";
import { UserContext } from "../components/UserContextProvider.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading.jsx";

export default function SetUserCart() {
  const { state, dispatch } = useContext(UserContext);
  const { user, cart } = state;

  const { isPending, error, data } = useQuery({
    queryKey: ["users_carts"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/carts").then((res) => res.data),
  });

  useEffect(() => {
    if (data) {
      const dataCart = data.find((i) => {
        return user.id === i.userId;
      });
      dispatch({ type: "SET_CART", payload: dataCart });
    }
  }, [data, user, cart, dispatch]);

  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return <Navigate to="/products" replace={true} />;
}
