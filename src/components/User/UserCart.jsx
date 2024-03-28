import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContextProvider.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading.jsx";
import CartItem from "./UserCart/CartItem.jsx";
import styles from "./UserCart/UserCart.module.css";

export default function UserCart() {
  const { state, dispatch } = useContext(UserContext);
  const { user, cart } = state;

  const [userCart, setCart] = useState();

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase().concat(str.slice(1));
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["users_carts"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/carts").then((res) => res.data),
  });

  useEffect(() => {
    const uCart = data.find((i) => {
      return user.id === i.userId;
    });
    setCart(uCart);
  }, [data, userCart, user]);

  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <section aria-label="user cart" className={styles.cartContainer}>
      <h2>{`Hi, ${capitalize(user.name.firstname)} ${capitalize(
        user.name.lastname
      )}! This is your shopping list:`}</h2>
      {userCart &&
        userCart.products.map((i) => {
          return (
            <CartItem
              key={i.productId}
              product={i}
              capitalize={capitalize}
              cart={cart}
              dispatch={dispatch}
            />
          );
        })}
    </section>
  );
}
