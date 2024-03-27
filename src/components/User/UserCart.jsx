import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContextProvider.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading.jsx";
import CartItem from "./UserCart/CartItem.jsx";
import styles from "./UserCart.module.css";

export default function UserCart() {
  const { state } = useContext(UserContext);
  const { user } = state;

  const [cart, setCart] = useState([]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase().concat(str.slice(1));
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["users_carts"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/carts").then((res) => res.data),
  });

  useEffect(() => {
    const userCart = data.find((i) => {
      return user.id === i.userId;
    });
    setCart(userCart);
  }, [data, cart, user]);

  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <section aria-label="user cart" className={styles.cartContainer}>
      <h2>{`Hi, ${capitalize(user.name.firstname)} ${capitalize(
        user.name.lastname
      )}! This is your shopping list:`}</h2>
      {cart.products.length > 0 &&
        cart.products.map((i) => {
          return <CartItem key={i.productId} />;
        })}
    </section>
  );
}
