import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Copyright from "../components/Copyright";
import LazyBackground from "../components/LazyBackground";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <LazyBackground
        height={window.innerWidth < 500 ? "100vh" : "calc(100vh)"}
        width={window.innerWidth < 500 ? "100vw" : "calc(100vw)"}
        src={`https://ik.imagekit.io/mjb06h/TwoHewitts/fountains/fountains1.jpg`}
        preload={
          "https://ik.imagekit.io/mjb06h/TwoHewitts/fountains/fountains1.jpg?tr=w-400,bl-4"
        }
      />
      <PageNav />
      <section>
        <h3>Making YOUR property YOUR paradise</h3>
        <Link className={styles.link} to="/quote">
          Request a Quote Now
        </Link>
      </section>
      <Copyright />
    </main>
  );
}

export default Homepage;
