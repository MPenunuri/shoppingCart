import PropTypes from "prop-types";
import styles from "./Products/Products.module.css";
import Product from "./Products/Product.jsx";

export default function Products({ products }) {
  Products.propTypes = {
    products: PropTypes.array.isRequired,
  };

  return (
    <section aria-label="Catalog of products" className={styles.section}>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </section>
  );
}
