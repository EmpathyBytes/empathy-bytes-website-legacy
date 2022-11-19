import * as React from "react";
import { Link } from "gatsby";
import Icon from "../images/icon.png";
import { useEffect, useState } from "react";

const justifyRight = {
  justifyContent: "flex-end",
};

const logoStyle = {
  height: "3rem",
  //   backgroundColor: "white",
  //   paddingTop: "10px",
  position: "absolute",
  left: 0,
  top: 0,
  backgroundColor: "#FFF",
  zIndex: 1,
  // -webkit-box-shadow: 0 15px 12px rgb(0 0 0 / 3%);
  boxShadow: "0 15px 12px rgb(0 0 0 / 3%)",
  marginLeft: "1.25rem",
  padding: "1.5rem 0.8125rem 0.8125rem",
  borderRadius: "0 0 10px 10px",
};

const rightAlign = {
  float: "right",
};

export default function Navbar() {
  const breakpoint = 80;
  const [outerClass, setOuterClass] = useState("navbar-outer navbar-top");

  const topLvlPath = () => window.location.pathname.split("/")[1];

  const onScroll = () => {
    const scroll = window.scrollY;
    if (scroll > breakpoint) setOuterClass("navbar-outer navbar-scrolled");
    else setOuterClass("navbar-outer navbar-top");
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={outerClass} style={justifyRight}>
      <div className="header-hatch"></div>
      <div className="nav-container">
        <div className="logoContainer">
          <Link
            className={`navbar-link ${
              topLvlPath() === "" ? "navbar-selected" : ""
            }`}
            to="/"
          >
            <img
              src={
                "https://www.library.gatech.edu/themes/custom/gtl_theme/dist/assets/gatech_library.svg"
              }
              alt="Logo"
              style={logoStyle}
            />
          </Link>
        </div>

        <div className="linkContainer">
          <div className="navbar-content">
            {/* `Icon` is the image file for the site logo */}

            {/* Links to other pages goes here! */}
            <Link
              className={`navbar-link ${
                topLvlPath() === "projects" ? "navbar-selected" : ""
              }`}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className={`navbar-link ${
                topLvlPath() === "about" ? "navbar-selected" : ""
              }`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`navbar-link ${
                topLvlPath() === "contact" ? "navbar-selected" : ""
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
