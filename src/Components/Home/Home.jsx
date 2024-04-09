import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function Home({ theme, changeTheme }) {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p className="moon-theme-icon">
            <BsFillMoonFill size={40} color="silver" />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill color="yellow" size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <h1> Hi I'm</h1>
        <h3>
          <Typewriter
            options={{
              strings: ["Front-end Developer", "Web Developer"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h3>
        <div className="button-for-action">
          <div className="hire-me-button">
            <a href="tel:+37477190212">Hire me</a>
          </div>
          <div className="get-resume-button">
            <a href={MyCv} download="My_Resume.pdf">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
