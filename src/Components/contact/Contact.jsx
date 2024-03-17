import React, { useEffect, useState } from "react";
import "./contact.css";
import CustomButton from "../button/CustomButton";
import location from "../../assets/location.svg";
import github from "../../assets/github-mark.svg";
import telegram from "../../assets/telegram.svg";
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (alertMessage) {
      setShowAlert(true);
      const timeout = setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
      }, 3000); // 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [alertMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to verify it's being captured correctly
    console.log("Form data:", {
      name,
      email,
      message,
    });

    emailjs
      .sendForm(
        "service_qop3xfk",
        "template_32h0udk",
        e.target, // Use the form element directly
        "FudthHlPiD9XVeYrD"
      )
      .then(
        (result) => {
          // Handle success
          console.log("Email sent:", result.text);
          setAlertMessage("Email sent successfully!");
        },
        (error) => {
          // Handle error
          console.error("Email sending failed:", error.text);
          setAlertMessage("Failed to send email");
        }
      );

    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <section className="contact" id="contact">
      <Alert
        variant="outlined"
        className={`alert-message ${showAlert ? "open-alert" : "close-alert"}`}
      >
        {alertMessage}
      </Alert>
      <div className="container">
        <div className="contact__row">
          <div className="contact__info">
            <div className="contact__info-text">
              <span className="contact__info-header">{t("contact")}</span>
              <span className="contact__info-description">
                {t("contact_sub")}
              </span>
            </div>
            <div className="contact__info-details">
              <div className="contact__info-address">
                <img className="icon__location" src={location} alt="location" />
                <div className="contact__info-data">
                  <span className="contact__info-type">{t("email")}</span>
                  <span className="contact__info-connect">
                    timurrdll@gmail.com
                  </span>
                </div>
              </div>
              <div className="contact__info-address">
                <img className="icon__location" src={location} alt="location" />
                <div className="contact__info-data">
                  <span className="contact__info-type">{t("number")}</span>
                  <span className="contact__info-connect">8-777-111-72-76</span>
                </div>
              </div>
            </div>
            <div className="contact__info-social">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/timurdll"
              >
                <img src={github} className="icon__social" alt="github" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/timurrdll"
              >
                <img src={telegram} className="icon__social" alt="telegram" />
              </a>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              className="contact__form-input"
              placeholder={t("name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
            />
            <input
              className="contact__form-input"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              name="reply_to"
            />
            <input
              className="contact__form-input"
              placeholder={t("message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              name="message"
            />
            <CustomButton
              iconType="plane"
              text={t("submit")}
              type="submit"
              variant="original"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
