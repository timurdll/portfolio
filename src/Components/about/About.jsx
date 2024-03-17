import React from "react";
import "./about.css";
import CustomButton from "../button/CustomButton";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="about" id="about">
      <div></div>
      <div></div>
      <div></div>
      <div className="container">
        <div className="about__row">
          <div className="about__content">
            <div className="about__content-text">
              <span className="hello">
                {t("hello")}
                <br />
                {t("Timur")}
              </span>
              <span className="info">
                {t("about_me-1")}
                <br /> {t("about_me-2")}
              </span>
              <a
                href="#advertisement"
                onClick={(e) => handleClick(e, "advertisement")}
              >
                <CustomButton text={t("details")} variant="original" />
              </a>
            </div>
            <div className="about__content-cards">
              <div className="card">
                <span className="card__text">{t("exp")}</span>
                <span className="card__subtext">{t("exp_sub")}</span>
              </div>
              <span className="line" />
              <div className="card">
                <span className="card__text">{t("pet")}</span>
                <span className="card__subtext">{t("pet_sub")}</span>
              </div>
              <span className="line" />
              <div className="card">
                <span className="card__text">{t("commerce")}</span>
                <span className="card__subtext">{t("commerce_sub")}</span>
              </div>
            </div>
          </div>
          <div className="about__image"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
