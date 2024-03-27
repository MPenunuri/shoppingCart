import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Profile/Profile.module.css";

export default function Profile({ user }) {
  Profile.propTypes = {
    user: PropTypes.object,
  };

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
          <p>{user.username}</p>
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
