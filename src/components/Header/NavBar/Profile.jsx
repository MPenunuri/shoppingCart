import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import styles from "./Profile/Profile.module.css";

export default function Profile() {
  const { state } = useContext(UserContext);
  const { user } = state;

  const [imgSrc, setImageSrc] = useState();

  useEffect(() => {
    (async function getImg() {
      const img = await import("../../../assets/person-outline.svg");
      setImageSrc(img.default);
    })();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <button
          className={styles.profileBtn}
          aria-label="view user data"
          onClick={() => navigate("/user")}
        >
          <img src={imgSrc} alt="User icon" className={styles.userIcon} />
          <p>
            {user.username}
            <span className={styles.tooltip}>View cart and user data</span>
          </p>
        </button>
      ) : (
        <button
          className={styles.profileBtn}
          aria-label="login"
          onClick={() => navigate("/home")}
        >
          <img src={imgSrc} alt="User icon" className={styles.userIcon} />
          <p>Login</p>
        </button>
      )}
    </>
  );
}
