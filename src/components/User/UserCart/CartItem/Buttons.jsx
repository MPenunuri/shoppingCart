import styles from "./Buttons.module.css";

export default function Buttons() {
  return (
    <div className={styles.btnsContainer} aria-label="true">
      <button className={styles.addBtn}>Add unit</button>
      <button className={styles.removeBtn}>Remove one</button>
      <button className={styles.deleteBtn}>Delete order</button>
    </div>
  );
}
