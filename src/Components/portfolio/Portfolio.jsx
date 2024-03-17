import React from "react";
import CustomButton from "../button/CustomButton";
import "./portfolio.css";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__row">
          <div className="portfolio__header">
            <span className="portfolio__header-text">{t("portfolio")}</span>
            <span className="portfolio__header-subtext">
              {t("portfolio_sub")}
            </span>
          </div>

          <div className="portfolio__content">
            <div className="portfolio__card">
              <div className="portfolio__card-image3" />
              <div className="portfolio__card-description">
                <span className="description-1">
                  Next.js, tailwind, rtk-query
                </span>
                <span className="description-2">Tweetopia🐦</span>
                <span className="description-3">{t("project-1")}</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tweetopia-eight.vercel.app/"
                >
                  <CustomButton
                    iconType="purple-arrow"
                    text={t("open")}
                    variant="second"
                  />
                </a>
              </div>
            </div>
            <div className="portfolio__card">
              <div className="portfolio__card-image1" />
              <div className="portfolio__card-description">
                <span className="description-1">React.js, firebase, MUI</span>
                <span className="description-2">IT English📚</span>
                <span className="description-3">{t("project-2")}</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://eduwebapp-523ac.web.app/"
                >
                  <CustomButton
                    iconType="purple-arrow"
                    text={t("open")}
                    variant="second"
                  />
                </a>
              </div>
            </div>
            <div className="portfolio__card">
              <div className="portfolio__card-image2" />
              <div className="portfolio__card-description">
                <span className="description-1">
                  Next.js, tailwind, typescript
                </span>
                <span className="description-2">CarHub🚗</span>
                <span className="description-3">{t("project-3")}</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wheelssync-khaki-ten.vercel.app/"
                >
                  <CustomButton
                    iconType="purple-arrow"
                    text={t("open")}
                    variant="second"
                  />
                </a>
              </div>
            </div>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/timurdll"
          >
            <CustomButton text={t("more")} variant="original" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
