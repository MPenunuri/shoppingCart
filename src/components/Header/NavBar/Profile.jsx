import { useEffect, useState } from "react";
import styles from "./Profile/Profile.module.css";

export default function Profile() {
  const [imgSrc, setImageSrc] = useState();

  useEffect(() => {
    (async function getImg() {
      const img = await import("../../../assets/person-outline.svg");
      setImageSrc(img.default);
    })();
  }, []);

  return (
    <button className={styles.profileBtn}>
      <img src={imgSrc} alt="User icon" className={styles.userIcon} />
      <p>Login</p>
    </button>
  );
}
