import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./CartItem.module.css";
import Head from "./CartItem/Head.jsx";
import Props from "./CartItem/Props.jsx";
import Amount from "./CartItem/Amount.jsx";
import Buttons from "./CartItem/Buttons.jsx";

export default function CartItem({ product }) {
  CartItem.propTypes = {
    product: PropTypes.object.isRequired,
  };

  const { productId, quantity } = product;

  const { isPending, error, data } = useQuery({
    queryKey: [`user_cart_product_${productId}`],
    queryFn: () =>
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div aria-label="cart item" className={styles.cartItem}>
      <Head styles={styles} data={data} />
      <Props styles={styles} tag="Price per unit" content={data.price} />
      <Props styles={styles} tag="Quantity" content={quantity} />
      <Amount styles={styles} data={data} quantity={quantity} />
      <Buttons />
    </div>
  );
}
