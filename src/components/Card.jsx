import Button from "./Button";
import styles from "./Card.module.css";

function Card({ title, description, img, id }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.side} ${styles.front}`}>
        <h2>{title}</h2>
        <img src={img} alt={id} />
      </div>

      <div className={`${styles.side} ${styles.back}`}>
        <p>{description}</p>
        <Button type="card">Request a quote</Button>
      </div>
    </div>
  );
}

export default Card;
