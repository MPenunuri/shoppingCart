import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./CartItem.module.css";

export default function CartItem({ product, capitalize, cart, dispatch }) {
  CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    capitalize: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
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

  return <div aria-label="cart item">{data.title}</div>;
}
