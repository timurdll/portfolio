import { useTranslation } from "react-i18next";
import CustomButton from "../button/CustomButton";
import "./advertisement.css";

const Advertisement = () => {
  const { t } = useTranslation();
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/Alshynbaev Timur Beibitovich.pdf";
    link.setAttribute("download", "TimurAlshynbayev.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="advertisement" id="advertisement">
      <div className="container">
        <div className="advertisement__content">
          <span className="advertisement__content-header">
            {t("advertisement")}
          </span>
          <span className="advertisement__content-text">
            {t("advertisement_sub")}
          </span>
          <div className="advertisement__skills">
            <span className="advertisement__skills-span">{t("skills")}</span>
            <div className="advertisement__skills-logos">
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="html/css"
              />
              <img src="https://skillicons.dev/icons?i=js,ts" alt="js/ts" />
              <img
                src="https://skillicons.dev/icons?i=react,next"
                alt="react/next"
              />
              <img
                src="https://skillicons.dev/icons?i=tailwind,scss"
                alt="tailwind/css"
              />
            </div>
          </div>
          <CustomButton
            text={t("download")}
            iconType="download"
            variant="original"
            onClick={handleDownloadClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
