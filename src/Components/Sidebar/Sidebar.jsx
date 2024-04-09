import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarList from "./SidebarList";

export default function Sidebar({ theme, changeTheme }) {
  const [expandSidebar, setExpandSitebar] = useState(false);
  const handleClick = () => {
    setExpandSitebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleClick}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>
      <div className="container">
        <Home changeTheme={changeTheme} theme={theme} />
      </div>
    </div>
  );
}
