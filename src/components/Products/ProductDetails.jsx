import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./ProductDetails.module.css";
import Loading from "../Loading.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: [`product_${id}_data`],
    queryFn: () =>
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.data),
  });

  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className={styles.productDetails} aria-label="Product details">
      <div aria-hidden="true">
        <h2 id="title" className={styles.title}>
          {data.title}
        </h2>
        <img
          className={styles.picture}
          src={data.image}
          alt="product picture"
        />
      </div>
      <div className={styles.gridsContainer}>
        <div className={styles.propGrid}>
          <p id="priceLabel">Price:</p>
          <p id="price" aria-labelledby="priceLabel">
            {data.price}
          </p>
        </div>
        <div className={styles.propGrid}>
          <p id="categoryLabel">Category:</p>
          <p id="category" aria-labelledby="categoryLabel">
            {data.category
              .charAt(0)
              .toUpperCase()
              .concat(data.category.slice(1))}
          </p>
        </div>
        <div className={styles.propGrid}>
          <p id="ratingLabel">Rating ({data.rating.count}):</p>
          <p id="rating" aria-labelledby="ratingLabel">
            {data.rating.rate}
          </p>
        </div>
        <div className={styles.propGrid}>
          <p id="descriptionLabel">Description:</p>
          <p id="description" aria-describedby="descriptionLabel">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
