import styles from "../styles/parent.module.scss";

export default function Main_Container() {
  return (
    <>
      <section className={styles.parent}>
        <div className="bg-img"></div>
        <article>
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial.</p>
          <p>No credit card required</p>
        </article>
      </section>
    </>
  );
}
