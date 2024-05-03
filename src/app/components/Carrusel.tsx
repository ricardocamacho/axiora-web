"use client";

import Image from "next/image";
import data from "./data/slider.json";
import styles from "../styles/index.module.scss";

interface SliderData {
  image: string;
  h2: string;
  paragraph: string;
}

interface SlideItemProps {
  data: SliderData;
}

const SlideItem: React.FC<SlideItemProps> = ({ data }) => {
  return (
    <main>
      <Image src={data.image} alt="slide" width={350} height={400} />
      <h2>{data.h2}</h2>
      <p>{data.paragraph}</p>
    </main>
  );
};

interface SliderProps {}

const Carrusel: React.FC<SliderProps> = () => {
  return (
    <section className={styles.carrusel}>
      {data.map((item, index) => (
        <SlideItem  key={index} data={item} />
      ))}
    </section>
  );
};

export default Carrusel;
