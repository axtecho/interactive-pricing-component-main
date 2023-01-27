import styles from "../styles/monthlyBillingButton.module.scss";
export default function ToggleButton() {
  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox"></input>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
}
