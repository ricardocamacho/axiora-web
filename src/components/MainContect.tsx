"use client";

import { useContext, useEffect } from "react";
import { useMenuContext } from "../context/MenuContext";
import Image from "next/image";
import imageUrl from "../data/imagesUrl.json";
import styles from "../styles/index.module.scss";

interface MainProps {}


const MainContect: React.FC<MainProps> = () => {
  const { menuOpen, toggleMenu } = useMenuContext();

  useEffect(() => {
    if (menuOpen) {
      toggleMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.MainContect}>
      <picture className={`${styles.open} ${menuOpen ? styles.closed : ""}`}>
        <source
          media="(min-width: 769px)"
          srcSet="/landing-page/home-hero.png"
          sizes="769px"
        />
        <Image
          src={"/landing-page/home-hero-mobile.png"}
          alt="mobile"
          width={600}
          height={600}
        />
      </picture>

      <div>
        <h1>CONECTA TUS PLATAFORMAS <br></br>DE E-COMMERCE</h1>
        <p>
          Con Axiora puedes conectar tus plataformas de e-commerce <strong>Mercadolibre</strong> y <strong>Shopify</strong> sincronizando tus ventas e inventario en tiempo real.
          
           <br></br>
           <br></br>
          
           Manten
          tu inventario sincronizado, entre dos o más cuentas de la misma o
          diferentes plataformas
        </p>
        <button>{"EMPIEZA >"}</button>
      </div>
    </section>
  );
};

export default MainContect;
