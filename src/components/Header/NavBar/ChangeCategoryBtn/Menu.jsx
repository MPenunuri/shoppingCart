import PropTypes from "prop-types";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ProductsContext } from "../../../ProductsContextProvider.jsx";

export default function Menu({ data, styles, setMenuVisible }) {
  Menu.propTypes = {
    data: PropTypes.array.isRequired,
    styles: PropTypes.object.isRequired,
    setMenuVisible: PropTypes.func.isRequired,
  };

  const { state, dispatch } = useContext(ProductsContext);
  const { currentCategory } = state;

  const menu = useRef();
  const navigate = useNavigate();

  return (
    <section ref={menu} aria-label="Categories menu" className={styles.menu}>
      <button
        type="button"
        className={styles.closeBtn}
        aria-label={"Close categories menu"}
        key={uuidv4()}
        onClick={() => {
          menu.current.classList.add("addDisable");
          setTimeout(() => setMenuVisible(false), 1000);
        }}
      >
        X
      </button>
      <h3>Select category:</h3>
      <button
        type="button"
        className={
          (styles.categoryBtn,
          currentCategory === "all" ? styles.Active : undefined)
        }
        aria-label={"View all products"}
        key={uuidv4()}
        onClick={() => {
          menu.current.classList.add("addDisable");
          setTimeout(() => setMenuVisible(false), 1000);
          navigate("/products");
          dispatch({ type: "CHANGE_CATEGORY", payload: "all" });
        }}
      >
        All products
      </button>
      {data.map((i) => {
        return (
          <button
            type="button"
            className={
              (styles.categoryBtn,
              currentCategory === i ? styles.Active : undefined)
            }
            aria-label={`Select category ${i}`}
            key={uuidv4()}
            onClick={() => {
              menu.current.classList.add("addDisable");
              setTimeout(() => setMenuVisible(false), 1000);
              navigate(`/products/category/${i}`);
              dispatch({ type: "CHANGE_CATEGORY", payload: i });
            }}
          >
            {i.charAt(0).toUpperCase().concat(i.slice(1))}
          </button>
        );
      })}
    </section>
  );
}
