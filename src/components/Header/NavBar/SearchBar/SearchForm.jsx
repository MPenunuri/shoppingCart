import { Form } from "react-router-dom";
import styles from "./SearchForm.module.css";
import PropTypes from "prop-types";

export default function SearchForm({ inputHandler }) {
  SearchForm.propTypes = {
    inputHandler: PropTypes.func.isRequired,
  };

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
        onInput={(e) => inputHandler(e)}
      />
    </Form>
  );
}
