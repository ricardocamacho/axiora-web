"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import data from "../data/slider.json";
import "swiper/css";
import "swiper/css/effect-cards";
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
    <main className={styles.sliderContainer}>
      <Image src={data.image} alt="slide" width={350} height={400} />
      <h2>{data.h2}</h2>
      <p>{data.paragraph}</p>
    </main>
  );
};

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  return (
    <section className={styles.container}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        spaceBetween={15}
        slidesPerView={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
