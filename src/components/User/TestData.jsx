import styles from "./TestData.module.css";

export default function TestData() {
  return (
    <div className={styles.generalContainer}>
      <p className={styles.header}>
        Hi! This is a test interface. Please use the app as a visitor or try
        with one of these:
      </p>
      <div className={styles.usersContainer}>
        <div className={styles.userContainer}>
          <div className={styles.propContainer}>
            <p>User:</p>
            <p>johnd</p>
          </div>
          <div className={styles.propContainer}>
            <p>Password:</p>
            <p>m38rmF$</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <div className={styles.propContainer}>
            <p>User:</p>
            <p>don@gmail.com</p>
          </div>
          <div className={styles.propContainer}>
            <p>Password:</p>
            <p>ewedon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
