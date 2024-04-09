import React from "react";
import "./About.css";
import Profilepicture from "../../images/profilepictures.jpg";
import Fade from "react-reveal/Fade";

export const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={Profilepicture} alt="Profile pictures" />{" "}
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <Fade top>
                <h5> About Me</h5>
                <span className="line"></span>
              </Fade>
            </div>
            <Fade bottom>
              <p>
                Hello, I'm Artem, 22 years old, and I studied Frontend
                Development from 2022 to 2023. I'm proficient in HTML, CSS,
                JavaScript, React.js, and TypeScript. I have a passion for
                programming and enjoy continuously improving my skills. Able to
                apply my educational skills and contribute my abilities to the
                growth of the organization as well as my own professional
                career. Quick learner and master in new technologies,
                successfully working in both team and self-direct settings.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
