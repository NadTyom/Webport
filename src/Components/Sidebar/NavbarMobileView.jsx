import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
} from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";
import Switch from "react-switch";

export const NavbarMobileView = ({ theme, changeTheme }) => {
  const [showMoadl, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(!showMoadl);
  };
  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleChange} />
        </p>
      </div>

      {showMoadl ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobileview">
              <Link to="home" spy={true} offset={-250}>
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="about" spy={true} offset={-250}>
                <FcNightPortrait size={25} /> About
              </Link>
            </li>

            <li className="nav-item-mobileview">
              <Link to="techstack" spy={true} offset={-250}>
                <MdBiotech color="green" size={25} /> Tech Stack
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="projects" spy={true} offset={-250}>
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="education" spy={true} offset={-250}>
                <MdCastForEducation color="yellow" size={25} /> Education
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="contact" spy={true} offset={-250}>
                <FcContacts size={25} /> Contacts
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Switch onChange={changeTheme} checked={theme === "light"} />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
