import React from "react";
import { useTranslation } from "react-i18next";
import Links from "../ui/Links/Links";
import "./Hero.scss";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="container">
        <div className="hero_body">
          <h1>
            <span className="hero_text_span">{t("it_services")}</span>
            {t("business")}
          </h1>
          <div>
            <p>
              Более <span>5 лет</span> наш фокус в <br /> онлайн трансформации
              Вашего бизнеса
            </p>
          </div>
          <Links title={t("callWithYou")} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
