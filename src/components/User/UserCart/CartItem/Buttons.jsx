import PropTypes from "prop-types";
import styles from "./Buttons.module.css";
import { useContext } from "react";
import { UserContext } from "../../../UserContextProvider.jsx";

export default function Buttons({ id }) {
  Buttons.propTypes = {
    id: PropTypes.number.isRequired,
  };

  const { state, dispatch } = useContext(UserContext);
  const { cart } = state;
  const { products } = cart;

  return (
    <div className={styles.btnsContainer} aria-label="true">
      <button
        className={styles.addBtn}
        onClick={() => {
          const arr = products.map((i) => {
            if (i.productId === id) {
              return { productId: id, quantity: i.quantity + 1 };
            } else return i;
          });
          dispatch({
            type: "SET_CART",
            payload: { ...cart, products: arr },
          });
        }}
      >
        Add unit
      </button>
      <button
        className={styles.removeBtn}
        onClick={() => {
          const arr = products.map((i) => {
            if (i.productId === id) {
              if (i.quantity === 0) return i;
              else return { productId: id, quantity: i.quantity - 1 };
            } else return i;
          });
          dispatch({
            type: "SET_CART",
            payload: { ...cart, products: arr },
          });
        }}
      >
        Remove one
      </button>
      <button
        className={styles.deleteBtn}
        onClick={() => {
          const arr = products.filter((i) => i.productId !== id);
          dispatch({
            type: "SET_CART",
            payload: { ...cart, products: arr },
          });
        }}
      >
        Delete order
      </button>
    </div>
  );
}
