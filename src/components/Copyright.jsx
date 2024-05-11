import styles from "./Copyright.module.css";

function Copyright() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.copyright}>&copy; {year} TWO Hewitts, Inc</footer>
  );
}

export default Copyright;
