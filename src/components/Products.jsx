import PropTypes from "prop-types";
import styles from "./Products/Products.module.css";

export default function Products({ products }) {
  Products.propTypes = {
    products: PropTypes.array.isRequired,
  };

  return (
    <section aria-label="Catalog of products" className={styles.section}>
      {products.map((product) => {
        return (
          <article key={product.id} className={styles.article}>
            <img src={product.image} alt="product picture" />
            <p>{product.title}</p>
          </article>
        );
      })}
    </section>
  );
}
