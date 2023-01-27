import Slider from "./Slider";
import ToggleButton from "./Monthly_Billing_Button";
import styles from "../styles/card.module.scss";
export default function Card() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <aside>
          <p>100K PAGEVIEWS</p>
          <Slider />
          <div>
            <p>$16.00 </p>
            <span>/ month</span>
          </div>
        </aside>
        <aside className={styles.billing}>
          <p>Monthly billing</p>
          <ToggleButton />
          <p>
            Yearly Billing <span>-25%</span>
          </p>
        </aside>
        <article>
          <aside>
            <p>
              <span>#</span>Unlimited websites
            </p>
            <p>
              <span>#</span>100% data ownership
            </p>
            <p>
              <span>#</span>Email reports
            </p>
          </aside>
          <button>Start my trial</button>
        </article>
      </section>
    </div>
  );
}
