import React from "react";

import { functionalities } from "../data";

const Functionalities = () => {
  const { cards } = functionalities;
  return (
    <section
      className="section mb-4"
      id="functionalities"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-[20px] lg:grid-cols-4 gap-x-[30px]">
          {cards.map((card, index) => {
            const { title, subtitle, image } = card;
            return (
              <div
                key={index}
                className="w-[270px] h-[400px] rounded-[20px] p-[40px] bg-white shadow-2xl"
              >
                <p className="text-2xl text-secondary font-bold text-center">
                  {title}
                </p>
                <p className="text-base text-primary text-center mt-4 mb-3 leading-tight">
                  {subtitle}
                </p>
                <img src={image} alt="Imagen de funcionalidad" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Functionalities;
