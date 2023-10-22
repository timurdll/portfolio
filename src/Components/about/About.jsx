import React from "react";
import "./about.css";
import CustomButton from "../button/CustomButton";

const About = () => {
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
                Hello, I’m
                <br />
                Timur👋
              </span>
              <span className="info">
                I'm a educated Front-end Developer based in Astana, Kazakhstan🌏
                <br />I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </span>
              <a
                href="#advertisement"
                onClick={(e) => handleClick(e, "advertisement")}
              >
                <CustomButton text="More detailed" variant="original" />
              </a>
            </div>
            <div className="about__content-cards">
              <div className="card">
                <span className="card__text">1 Y.</span>
                <span className="card__subtext">Expirence</span>
              </div>
              <span className="line" />
              <div className="card">
                <span className="card__text">4</span>
                <span className="card__subtext">Pet projects</span>
              </div>
              <span className="line" />
              <div className="card">
                <span className="card__text">1</span>
                <span className="card__subtext">Commerce project</span>
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
