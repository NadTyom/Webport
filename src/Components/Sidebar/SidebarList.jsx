import React from "react";
import "./SidebarList.css";
import profilepicture from "../../images/profilepictures.jpg";
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
} from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";

export default function SidebarList({ expandSidebar }) {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepicture} alt="profile photo" />
          </div>

          <ul>
            <li className="nav-item">
              <Link to="home" spy={true}>
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true}>
                <FcNightPortrait size={25} /> About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="techstack" spy={true} offset={-150}>
                <MdBiotech color="green" size={25} /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" spy={true} offset={-190}>
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} offset={-190}>
                <MdCastForEducation color="yellow" size={25} /> Education
              </Link>
            </li>

            <li className="nav-item">
              <Link to="contact" spy={true} offset={-250}>
                <FcContacts size={25} /> Contacts
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items">
          <ul>
            <li className="nav-item">
              <Link to="home" spy={true} offset={-150}>
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} offset={-150}>
                <FcNightPortrait size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="techstack" spy={true} offset={-150}>
                <MdBiotech color="green" size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" spy={true} offset={-190}>
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} offset={-190}>
                <MdCastForEducation color="yellow" size={25} />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="contact" spy={true} offset={-250}>
                <FcContacts size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
