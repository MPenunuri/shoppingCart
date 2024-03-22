import { Form } from "react-router-dom";
import styles from "./SearchForm.module.css";

export default function SearchForm() {
  return (
    <Form method="get" role="search" className={styles.form}>
      <label htmlFor="search-input" className={styles.label}>
        What are you looking for?
      </label>
      <input
        id="search-input"
        className={styles.searchInput}
        type="text"
        name="search"
        aria-label="search products"
        placeholder="Just type any product!"
      />
    </Form>
  );
}
