import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <h1>TWO Hewitts Inc</h1>
      <h2>Lawn Maintenance & Landscaping</h2>
    </Link>
  );
}

export default Logo;
