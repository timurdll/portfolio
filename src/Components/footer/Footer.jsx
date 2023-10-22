import React from "react";
import "./footer.css";

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__logo">
            {/* <div className="footer__logo-letter">
              <div className="footer__logo-letter-wrapper">🤡</div>
            </div> */}
            <div className="footer__logo-text">Timurdll</div>
          </div>
          <ul className="footer__links">
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              <li className="footer__link">Home</li>
            </a>
            <a
              href="#advertisement"
              onClick={(e) => handleNavClick(e, "advertisement")}
            >
              <li className="footer__link">About</li>
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "portfolio")}
            >
              <li className="footer__link">Portfolio</li>
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              <li className="footer__link">Contact</li>
            </a>
          </ul>
          <span className="footer__copyright">Copyright © 2022 Timurdll.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
