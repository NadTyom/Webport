import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcGraduationCap } from "react-icons/fc";
export const Education = () => {
  const data = [
    {
      name: "Sevan N3 School",
      degree: "Secondary education",
      year: "2008-2017",
      description: "Secondary education ",
    },
    {
      name: "Sevan Multifunctional state college",
      degree: "SOFTWARE DEVELOPMENT",
      year: "2017-2023",
      description:
        "I studied at college to become a programmer and completed my education after returning from the army",
    },
    {
      name: "Global It",
      degree: "Front-end Developer",
      year: "2022-2023",
      description:
        "Besides college, I also studied at Global IT company to become a Frontend Developer specialist. You can check my skills on this page",
    },
  ];
  const colors = [
    "#FF00FF",
    "#000080",
    "#00FFFF",
    "#00FF00",
    "#86105B",
    "#000080",
    "#454545",
  ];
  return (
    <div className="container education" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>

      <VerticalTimeline lineColor={colors[0]}>
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
            date={item.year}
            dateClassName="date-year"
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<FcGraduationCap />}
            key={index}
          >
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            <h5 className="vertical-timeline-element-subtitle">
              {item.degree}
            </h5>

            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
