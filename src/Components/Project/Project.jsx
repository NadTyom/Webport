import React from "react";
import { ProjectList } from "./ProjectList";

export const Project = () => {
  const data = [
    {
      name: "Project 1",
      description:
        "I have a passion for programming andenjoy continuously improving my skills. Able to apply educational skills and contribute my abilities to the growth of the organization as well as my own professional career",
      projectLink: "https://github.com/NadTyom/Rtkquery.git",
      techUsed: [
        {
          techname: "React Js",
        },
        {
          techname: "TypeScript",
        },
        {
          techname: "RTk Query",
        },
      ],
    },
    {
      name: "Kinoman",
      description:
        "I have a passion for programming andenjoy continuously improving my skills. Able to apply educational skills and contribute my abilities to the growth of the organization as well as my own professional career",
      projectLink: "https://github.com/NadTyom/kinoman.git",
      techUsed: [
        {
          techname: "React Js",
        },
        {
          techname: "Html",
        },
        {
          techname: "Css",
        },
      ],
    },
    {
      name: "React Crypto-app",
      description:
        "I have a passion for programming andenjoy continuously improving my skills. Able to apply educational skills and contribute my abilities to the growth of the organization as well as my own professional career",
      projectLink: "https://github.com/NadTyom/react-crypto-app.git",
      techUsed: [
        {
          techname: "React Js",
        },
        {
          techname: "Node Js",
        },
        {
          techname: "AntDesign",
        },
      ],
    },
    {
      name: "Web Portfolio",
      description:
        "I have a passion for programming andenjoy continuously improving my skills. Able to apply educational skills and contribute my abilities to the growth of the organization as well as my own professional career",
      projectLink: "https://github.com/NadTyom/Portfolio.git",
      techUsed: [
        {
          techname: "React Js",
        },
        {
          techname: "Redux",
        },
        {
          techname: "Css",
        },
      ],
    },
    {
      name: "Git Searcher",
      description:
        "I have a passion for programming andenjoy continuously improving my skills. Able to apply educational skills and contribute my abilities to the growth of the organization as well as my own professional career",
      projectLink: "https://github.com/NadTyom/TypeReact.git",
      techUsed: [
        {
          techname: "JavaScript",
        },
        {
          techname: "TypeScript",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Css",
        },
      ],
    },
  ];
  return (
    <div className="container" id="projects">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
