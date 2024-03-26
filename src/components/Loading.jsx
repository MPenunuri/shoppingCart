import styles from "./Loading/Loading.module.css";

export default function Loading() {
  return (
    <section aria-label="Loading animation" className={styles.container}>
      <div className={styles.ldsRing} aria-hidden="true">
        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
      </div>
    </section>
  );
}
