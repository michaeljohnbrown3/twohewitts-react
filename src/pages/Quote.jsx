import LazyBackground from "../components/LazyBackground";
import styles from "./Quote.module.css";

function Quote() {
  return (
    <main className={styles.quote}>
      <LazyBackground
        height={"calc(100vh - 5rem)"}
        width={"calc(100vw - 5rem)"}
        src={"https://ik.imagekit.io/mjb06h/TwoHewitts/lighting/lighting2.jpg"}
        preload={
          "https://ik.imagekit.io/mjb06h/TwoHewitts/lighting/lighting2.jpg?tr=w-400,bl-4"
        }
      />
      <h1>Quote</h1>
    </main>
  );
}

export default Quote;
