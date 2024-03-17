import React, { useState } from "react";
import "./header.css";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import ReactSelect from "react-select";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const options = [
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
  ];

  const handleChangeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

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
            <div className="header__logo-text">Timurdll</div>
          </div>
          <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
            <ul className="header__nav-links">
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                <li className="header__nav-link">{t("home")}</li>
              </a>
              <a
                href="#advertisement"
                onClick={(e) => handleNavClick(e, "advertisement")}
              >
                <li className="header__nav-link">{t("about")}</li>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                <li className="header__nav-link">{t("portfolio")}</li>
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                <li className="header__nav-link">{t("contacts")}</li>
              </a>
              <span className="header__nav-selector">
                <ReactSelect
                  options={options}
                  placeholder={
                    <div className="header__nav-selector-icon">
                      <LanguageIcon />
                    </div>
                  }
                  onChange={handleChangeLanguage}
                />
              </span>
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
              <span className="mobile__nav-selector">
                <ReactSelect
                  options={options}
                  placeholder={
                    <div>
                      <LanguageIcon />
                    </div>
                  }
                  onChange={handleChangeLanguage}
                />
              </span>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
