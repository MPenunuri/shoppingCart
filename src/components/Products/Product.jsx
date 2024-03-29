import PropTypes from "prop-types";
import styles from "./Products.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider.jsx";

export default function Product({ product }) {
  Product.propTypes = {
    product: PropTypes.object.isRequired,
  };

  const [viewImgSrc, setViewImgSrc] = useState();
  const [cartImgSrc, setCartImgSrc] = useState();

  useEffect(() => {
    (async function getViewIMG() {
      const img = await import("../../assets/eye-outline.svg");
      setViewImgSrc(img.default);
    })();
    (async function getCartIMG() {
      const img = await import("../../assets/cart-outline.svg");
      setCartImgSrc(img.default);
    })();
  }, []);

  const { state } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <article key={product.id} className={styles.article}>
      <img src={product.image} alt="product picture" />
      <p>{product.title}</p>
      <div className={styles.btnsContainer}>
        <button
          type="button"
          aria-label="View details button"
          className={styles.detailsBtn}
          onClick={() => navigate(`/products/product/${product.id}`)}
        >
          <img src={viewImgSrc} alt="Details icon" />
          <p className={styles.tooltip}>View details</p>
        </button>
        {state.user !== undefined && (
          <button
            type="button"
            aria-label="Add to cart button"
            className={styles.cartBtn}
            onClick={() => navigate(`/user/cart/add/${product.id}`)}
          >
            <img src={cartImgSrc} alt="Cart icon" />
            <p className={styles.tooltip}>Add to cart</p>
            <p className={styles.tooltip}>Added to cart</p>
          </button>
        )}
      </div>
    </article>
  );
}
