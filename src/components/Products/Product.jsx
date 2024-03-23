import PropTypes from "prop-types";
import styles from "./Products.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <article key={product.id} className={styles.article}>
      <img src={product.image} alt="product picture" />
      <p>{product.title}</p>
      <div className={styles.btnsContainer}>
        <Link to={`./product/${product.id}`}>
          <button
            type="button"
            aria-label="View details button"
            className={styles.detailsBtn}
          >
            <img src={viewImgSrc} alt="Details icon" />
            <p className={styles.tooltip}>View details</p>
          </button>
        </Link>
        <button
          type="button"
          aria-label="Add to cart button"
          className={styles.cartBtn}
        >
          <img src={cartImgSrc} alt="Cart icon" />
          <p className={styles.tooltip}>Add to cart</p>
        </button>
      </div>
    </article>
  );
}
