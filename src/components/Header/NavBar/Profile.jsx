import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Profile/Profile.module.css";

export default function Profile({ user, visitor }) {
  Profile.propTypes = {
    user: PropTypes.bool,
    visitor: PropTypes.bool,
  };

  const [imgSrc, setImageSrc] = useState();

  useEffect(() => {
    (async function getImg() {
      const img = await import("../../../assets/person-outline.svg");
      setImageSrc(img.default);
    })();
  }, []);

  return (
    <>
      {visitor && (
        <button className={styles.profileBtn}>
          <img src={imgSrc} alt="User icon" className={styles.userIcon} />
          <p>Login</p>
        </button>
      )}
      {user && (
        <button className={styles.profileBtn}>
          <img src={imgSrc} alt="User icon" className={styles.userIcon} />
          <p>UserName</p>
        </button>
      )}
    </>
  );
}
