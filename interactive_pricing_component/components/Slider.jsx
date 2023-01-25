import styles from "../styles/Slider.module.scss";

export default function Slider() {
  function ReadSlider(e) {
    /*     console.log(e.target);
     */
  }
  return (
    <div className={styles.slidecontainer}>
      <input
        className={styles.slider}
        type="range"
        min="1"
        max="100'"
        onChange={ReadSlider}
      />
    </div>
  );
}
