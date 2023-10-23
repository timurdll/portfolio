import React from "react";
import CustomButton from "../button/CustomButton";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__row">
          <div className="portfolio__header">
            <span className="portfolio__header-text">Portfolio</span>
            <span className="portfolio__header-subtext">
              Every project is unique piece of development created with love💖
            </span>
          </div>
          <div className="portfolio__content">
            <div className="portfolio__card">
              <div className="portfolio__card-image1" />
              <div className="portfolio__card-description">
                <span className="description-1">React.js, firebase, MUI</span>
                <span className="description-2">IT English📚</span>
                <span className="description-3">
                  Educational web app with vocabulary, tests and interactive
                  tasks.
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://eduwebapp-523ac.web.app/"
                >
                  <CustomButton
                    iconType="purple-arrow"
                    text="Open"
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
                <span className="description-2">Wheelssync🚗</span>
                <span className="description-3">
                  A car rental website with detailed car data and filter-search.
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wheelssync-khaki-ten.vercel.app/"
                >
                  <CustomButton
                    iconType="purple-arrow"
                    text="Open"
                    variant="second"
                  />
                </a>
              </div>
            </div>
            <div className="portfolio__card">
              <div className="portfolio__card-image3" />
              <div className="portfolio__card-description">
                <span className="description-1">Next.js, tailwind</span>
                <span className="description-2">Promptopia🤖</span>
                <span className="description-3">
                  A prompt sharing website with personal profiles.
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://promptopia-omega-rouge.vercel.app/"
                >
                  <CustomButton
                    iconType="purple-arrow"
                    text="Open"
                    variant="second"
                  />
                </a>
              </div>
            </div>
            {/* <div className="portfolio__card">2</div>
            <div className="portfolio__card">3</div> */}
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/timurdll"
          >
            <CustomButton text="More Projects" variant="original" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
