import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import Info from "./User/Info.jsx";
import styles from "./User/User.module.css";

export default function User() {
  const { state } = useContext(UserContext);
  const { user } = state;

  const [imgSrc, setImageSrc] = useState();

  useEffect(() => {
    (async function getImg() {
      const img = await import("../assets/cart-outline.svg");
      setImageSrc(img.default);
    })();
  }, []);

  const navigate = useNavigate();

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase().concat(str.slice(1));
  };

  return (
    <section className={styles.profileContainer} aria-label="user information">
      <h2>
        {`Welcome, ${capitalize(user.name.firstname)} ${capitalize(
          user.name.lastname
        )}`}
      </h2>
      <button
        type="button"
        aria-label="view user cart"
        className={styles.viewCartBtn}
        onClick={() => navigate("/user/cart")}
      >
        <img src={imgSrc} alt="cart icon" />
        <p className={styles.tooltip}>View cart</p>
      </button>
      <Info user={user} capitalize={capitalize} />
    </section>
  );
}
