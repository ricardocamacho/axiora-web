import Image from "next/image";
import data from "../data/planes.json";
import styles from "../styles/index.module.scss";

interface PlanesData {
  Image: string;
  plan: string;
  h3: string;
  paragraph: string;
  parrafo: string;
  nameBtn: string;
}

interface PlanesListProps {
  data: PlanesData[];
}

const Plan: React.FC<PlanesListProps> = () => {
  return (
    <>
      <section className={styles.planContainer}>
        <section className={styles.title}>
          <h1>Planes</h1>
          <p>Escoge el plan que más se adapte a ti y a tu negocio</p>
        </section>
        <section className={styles.plan}>
          <main>
            {data.map((plan, index) => (
              <section key={index}>
                <Image
                  src={plan.image}
                  alt={`Plan ${index}`}
                  width={500}
                  height={600}
                />
                <h3>{plan.plan}</h3>
                <h2>{plan.h2}</h2>
                <p>{plan.paragraph}</p>
                <p>{plan.párrafo}</p>
                <button>{plan.nameBtn}</button>
              </section>
            ))}
          </main>
        </section>
      </section>
    </>
  );
};

export default Plan;
