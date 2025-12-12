"use client"; // si estás en Next.js (app router)

import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';

type CarrucelProps = {
  ClassSection?: string;
  Modules?: any[]; // puedes tipar mejor si lo deseas
  Effect?: string;
  Loop?: boolean;
  AutoPlay?: object;
  ClassSwiper?: string;
  children?: React.ReactNode;
};

const Carrucel: React.FC<CarrucelProps> = ({
  ClassSection = "",
  Modules = [Autoplay, EffectFade],
  Effect = "fade",
  Loop = true,
  AutoPlay = { delay: 5000, disableOnInteraction: false },
  ClassSwiper = "",
  children,
}) => {
  return (
    <section className={ClassSection}>
      <Swiper
        modules={Modules}
        effect={Effect}
        loop={Loop}
        autoplay={AutoPlay}
        className={ClassSwiper}
      >
        {children}
      </Swiper>
    </section>
  );
};

export default Carrucel;
