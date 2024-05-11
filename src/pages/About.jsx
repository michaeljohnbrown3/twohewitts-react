import Copyright from "../components/Copyright";
import LazyBackground from "../components/LazyBackground";
import PageNav from "../components/PageNav";
import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.about}>
      <LazyBackground
        height={window.innerWidth < 500 ? "100vh" : "calc(100vh - 5rem)"}
        width={window.innerWidth < 500 ? "100vw" : "calc(100vw - 5rem)"}
        src={"https://ik.imagekit.io/mjb06h/TwoHewitts/gates/gates2.jpg"}
        preload={
          "https://ik.imagekit.io/mjb06h/TwoHewitts/gates/gates2.jpg?tr=w-400,bl-4"
        }
      />
      <PageNav />
      <section>
        <div>
          <img
            src="https://ik.imagekit.io/mjb06h/TwoHewitts/rocks/rocks11.jpg?tr=w-300"
            alt="rocks11"
          />
        </div>
        <div>
          <p>
            TWO Hewitts, Inc. is a family owned company with more than 20 years
            experience in lawn maintenance and landscaping. We are licensed and
            fully insured.
          </p>
        </div>
      </section>
      <Copyright />
    </main>
  );
}

export default About;
