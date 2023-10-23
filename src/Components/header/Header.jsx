import React, { useState } from "react";
import "./header.css";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            {/* <div className="header__logo-letter">
              <div className="header__logo-letter-wrapper">🤡</div>
            </div> */}
            <div className="header__logo-text">Timurdll</div>
          </div>
          <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
            <ul className="header__nav-links">
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                <li className="header__nav-link">Home</li>
              </a>
              <a
                href="#advertisement"
                onClick={(e) => handleNavClick(e, "advertisement")}
              >
                <li className="header__nav-link">About</li>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                <li className="header__nav-link">Portfolio</li>
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                <li className="header__nav-link">Contact</li>
              </a>
            </ul>
          </nav>
          <button className="header__burger" onClick={toggleMenu}>
            <img src={menu} alt="menu" />
          </button>

          <div
            className={`mobile__nav ${
              isMenuOpen ? "open-menu" : "closed-menu"
            }`}
          >
            <span
              className="mobile__nav-close"
              onClick={() => setMenuOpen(false)}
            >
              <img src={close} alt="x" />
            </span>
            <ul className="mobile__nav-links">
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                <li>Home</li>
              </a>
              <a
                href="#advertisement"
                onClick={(e) => handleNavClick(e, "advertisement")}
              >
                <li>About</li>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                <li>Portfolio</li>
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
