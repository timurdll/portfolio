import CustomButton from "../button/CustomButton";
import "./advertisement.css";

const Advertisement = () => {
  return (
    <section className="advertisement" id="advertisement">
      <div className="container">
        <div className="advertisement__content">
          <span className="advertisement__content-header">
            Is your company looking for a frontend developer to join its ranks?
            Look no further!
          </span>
          <span className="advertisement__content-text">
            Im that diligent, professional and friendly worker you need! With a
            strong track record in creating innovative and user-friendly web
            applications, I'm ready to bring my expertise to your company.
          </span>
          <div className="advertisement__skills">
            <span className="advertisement__skills-span">My Skills</span>
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
            text="Download my CV"
            iconType="download"
            variant="original"
          />
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
