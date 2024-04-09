import React, { createContext, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { About } from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import { Project } from "./Components/Project/Project";
import { Education } from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { NavbarMobileView } from "./Components/Sidebar/NavbarMobileView";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <NavbarMobileView changeTheme={changeTheme} theme={theme} />
        <Sidebar changeTheme={changeTheme} theme={theme} />
        <About />
        <TechStack />
        <Project />
        <Education />
        <Contact />
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ borderRadius: "75px", backgroundColor: "aqua" }}
      />
    </ThemeContext.Provider>
  );
}
