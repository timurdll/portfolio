import React from "react";
import "./about.css";
import CustomButton from "../button/CustomButton";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                }}
                className="hello"
              >
                {t("hello")}
                <br />
                {t("Timur")}👋
                {/* <motion.div
                  animate={{ rotate: 5 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: "mirror",
                  }}
                  // style={{ maxWidth: "30px" }}
                >
                  👋
                </motion.div> */}
              </motion.span>

              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                }}
                className="info"
              >
                {t("about_me-1")}
                <br /> {t("about_me-2")}
              </motion.span>
              <motion.a
                href="#advertisement"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                }}
                onClick={(e) => handleClick(e, "advertisement")}
              >
                <CustomButton text={t("details")} variant="original" />
              </motion.a>
            </div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1.8,
              }}
              className="about__content-cards"
            >
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
            </motion.div>
          </div>
          <div className="about__image"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
