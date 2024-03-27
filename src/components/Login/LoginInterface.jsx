import { Form } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContextProvider.jsx";
import PropTypes from "prop-types";
import Inputs from "./Inputs.jsx";
import Buttons from "./Buttons.jsx";
import styles from "./Login.module.css";

export default function LoginInterface({
  dataUser,
  userValidation,
  setUserValidation,
}) {
  LoginInterface.propTypes = {
    dataUser: PropTypes.object.isRequired,
    userValidation: PropTypes.object.isRequired,
    setUserValidation: PropTypes.func.isRequired,
  };

  const { state, dispatch } = useContext(UserContext);
  const { visitor } = state;

  return (
    <section aria-label="Login interface" className={styles.container}>
      <Form
        method="post"
        role="search"
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const user = e.target.elements.user.value;
          const password = e.target.elements.password.value;
          dataUser.current = { user, password };
          setUserValidation({ ...state, dataSend: true });
        }}
      >
        <Inputs styles={styles} userValidation={userValidation} />
        <div aria-hidden="true" className={styles.btnsContainer}>
          <Buttons visitor={visitor} dispatch={dispatch} />
        </div>
      </Form>
    </section>
  );
}
