import React from "react";
import Links from "../ui/Links/Links";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="container">
        <div className="hero_body">
          <h1>
            <span className="hero_text_span">IT-услугидля</span>бизнеса любого
            уровня
          </h1>
          <div>
            <p>
              Более <span>5 лет</span> наш фокус в <br /> онлайн трансформации Вашего
              бизнеса
            </p>
          </div>
          <Links title={"Связаться с нами"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
