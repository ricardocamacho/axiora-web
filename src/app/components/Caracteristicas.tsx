import Image from "next/image";
import data from "./data/caracteristicas.json";
import styles from "../styles/index.module.scss";

interface FeatureData {
  image: string;
  h3: string;
  paragraph: string;
}

interface FeaturesListProps {
  data: FeatureData[];
}

const Caracteristicas: React.FC<FeaturesListProps> = () => {
  return (
    <>
      <section className={styles.caracteristicas}>
        <section className={styles.title}>
          <h1>Características</h1>
          <br></br>
          <br></br>
          <h4>Explora todas las características que Axiora te ofrece</h4>
          <br></br>
        </section>
        <main className={styles.caracteristicasContainer}>
          {data.map((feature, index) => (
            <section key={index}>
              <aside>
                <h3>{feature.h3}</h3>
                <br></br>
                <p>{feature.paragraph}</p>
                <div className={styles.ejemplos}>
                  <h4>{feature.one}</h4>
                  <h4>{feature.two}</h4>
                  <h4>{feature.three}</h4>
                </div>
              </aside>
              <Image
                src={feature.image}
                alt={`Feature ${index}`}
                width={500}
                height={600}
              />
              <br></br>
            </section>
          ))}
        </main>
      </section>
    </>
  );
};

export default Caracteristicas;
