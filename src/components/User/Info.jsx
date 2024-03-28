import PropTypes from "prop-types";
import styles from "./Info.module.css";

export default function Info({ user, capitalize }) {
  Info.propTypes = {
    user: PropTypes.object.isRequired,
    capitalize: PropTypes.func.isRequired,
  };
  return (
    <div aria-hidden="true" className={styles.infoContainer}>
      <div className={styles.gridsContainer} aria-hidden="true">
        <div className={styles.propGrid} aria-hidden="true">
          <p id="usernameLabel">User:</p>
          <p id="username" aria-labelledby="userLabel">
            {user.username}
          </p>
        </div>
        <div className={styles.propGrid} aria-hidden="true">
          <p id="emailLabel">Email:</p>
          <p id="email" aria-labelledby="emailLabel">
            {user.email}
          </p>
        </div>
        <div className={styles.propGrid} aria-hidden="true">
          <p id="phoneLabel">Phone:</p>
          <p id="rating" aria-labelledby="poneLabel">
            {user.phone}
          </p>
        </div>
      </div>
      <div className={styles.gridsContainer}>
        <h3>Adress</h3>
        <div className={styles.propGrid} aria-hidden="true">
          <p id="cityLabel">City:</p>
          <p id="city" aria-labelledby="cityLabel">
            {capitalize(user.address.city)}
          </p>
        </div>
        <div className={styles.propGrid} aria-hidden="true">
          <p id="streetLabel">Street:</p>
          <p id="street" aria-labelledby="streetLabel">
            {capitalize(user.address.street)}
          </p>
        </div>
        <div className={styles.propGrid} aria-hidden="true">
          <p id="numberLabel">Number:</p>
          <p id="number" aria-labelledby="numberLabel">
            {user.address.number}
          </p>
        </div>
        <div className={styles.propGrid} aria-hidden="true">
          <p id="numberLabel">Zip code:</p>
          <p id="number" aria-labelledby="numberLabel">
            {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
}
