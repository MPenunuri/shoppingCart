import PropTypes from "prop-types";

export default function Inputs({ styles, userValidation }) {
  Inputs.propTypes = {
    styles: PropTypes.object.isRequired,
    userValidation: PropTypes.object.isRequired,
  };
  const { user, password } = userValidation;
  return (
    <>
      <label htmlFor="user" className={styles.label}>
        User
        {user === false ? <span>Incorrect email or user name</span> : <></>}
      </label>
      <input
        id="user"
        className={styles.loginInput}
        type="text"
        name="user"
        aria-label="user input"
        placeholder="Enter email or user name"
        autoComplete="username"
        required
      />
      <label htmlFor="psw" className={styles.label}>
        Password
        {password === false ? <span>Incorrect password</span> : <></>}
      </label>
      <input
        id="pws"
        className={styles.loginInput}
        type="password"
        name="password"
        aria-label="password input"
        placeholder="********"
        autoComplete="current-password"
        required
      />
    </>
  );
}
