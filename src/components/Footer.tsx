import Image from "next/image";
import styles from "../styles/index.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.foot}>
        <section>
        <Image
          src={"/logos/white-full-axiora.svg"}
          alt=""
          width={150}
          height={150}
        />
        <span>© Axiora 2024. Todos los derechos reservados.</span>
        </section>
      </footer>
    </>
  );
};

export default Footer;
