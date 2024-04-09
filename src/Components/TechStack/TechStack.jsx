import React, { useState } from "react";
import "./TechStack.css";
import html from "../../images/html.png";
import Css from "../../images/Css.png";
import Js from "../../images/Js.png";
import ReactIcon from "../../images/icons8-react-160.png";
import Ts from "../../images/icons8-typescript-96.png";
import Next from "../../images/next.jpg";
import Redux from "../../images/redux.png";
import Frontend from "../../images/frontend.png";
import Github from "../../images/github.png";

export default function TechStack() {
  const [showMoreTech, setShowMoreTech] = useState(3);
  const loadMore = () => {
    setShowMoreTech((prev) => prev + 3);
  };
  const data = [
    {
      name: "Front-end Developer",
      img: Frontend,
    },
    {
      name: "HTML",
      img: html,
    },
    {
      name: "Css",
      img: Css,
    },
    {
      name: "JavaScript",
      img: Js,
    },
    {
      name: "React Js",
      img: ReactIcon,
    },
    {
      name: "TypeScript",
      img: Ts,
    },
    {
      name: "Next Js",
      img: Next,
    },
    {
      name: "Redux",
      img: Redux,
    },
    {
      name: "GitHub",
      img: Github,
    },
  ];

  return (
    <div className="container tech-stack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMoreTech).map((item, index) => (
          <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="tech-content">
              <p>{item.name}</p>
              <img src={item.img} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
      {showMoreTech >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load more
        </span>
      )}
    </div>
  );
}
