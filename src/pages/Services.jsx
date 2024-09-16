import Card from "../components/Card";
import Copyright from "../components/Copyright";
import PageNav from "../components/PageNav";
import styles from "./Services.module.css";
import * as serviceData from "./../../data/services.json";
import LazyBackground from "../components/LazyBackground";

function Services() {
  const services = serviceData.default;
  return (
    <main className={styles.services}>
      <LazyBackground
        height={window.innerWidth < 500 ? "100vh" : "calc(100vh)"}
        width={window.innerWidth < 500 ? "100vw" : "calc(100vw)"}
        src={"https://ik.imagekit.io/mjb06h/TwoHewitts/rocks/rocks5.jpg"}
        preload={
          "https://ik.imagekit.io/mjb06h/TwoHewitts/rocks/rocks5.jpg?tr=w-400,bl-4"
        }
      />
      <PageNav />
      <section>
        <div className={styles.cardsSection}>
          {services.map((card) => (
            <Card
              title={card.title}
              description={card.description}
              id={card.id}
              img={card.img}
              key={card.title}
            />
          ))}
        </div>
      </section>
      <Copyright />
    </main>
  );
}

export default Services;
