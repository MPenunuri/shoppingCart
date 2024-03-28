import { useContext } from "react";
import { UserContext } from "../UserContextProvider.jsx";
import TotalAmount from "./UserCart/TotalAmount.jsx";
import CartItem from "./UserCart/CartItem.jsx";
import styles from "./UserCart/UserCart.module.css";

export default function UserCart() {
  const { state } = useContext(UserContext);
  const { user, cart } = state;

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase().concat(str.slice(1));
  };

  return (
    <section aria-label="user cart" className={styles.cartContainer}>
      {cart ? (
        <>
          <h2>{`Hi, ${capitalize(user.name.firstname)} ${capitalize(
            user.name.lastname
          )}! Here is your shopping list.`}</h2>
          <TotalAmount styles={styles} cart={cart} />
          {cart.products.map((i) => {
            return <CartItem key={i.productId} product={i} />;
          })}
        </>
      ) : (
        <h2>{`Hi, ${capitalize(user.name.firstname)} ${capitalize(
          user.name.lastname
        )}! You don't have any products in your cart yet :(`}</h2>
      )}
    </section>
  );
}
