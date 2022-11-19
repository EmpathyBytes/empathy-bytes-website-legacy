import * as React from "react";
import { Link } from "gatsby";
import { useEffect, useState } from "react";

const ReactiveLink = ({name, path}) => {
  const topLvlPath = () => window.location.pathname.split("/")[1];
  return (
      <Link className={`navbar-link`} to={`/${path}`}>
        <div className={`navbar-link ${topLvlPath() === path ? "navbar-selected" : ""}`}>
          {name}
        </div>
        <div className={`navbar-link-bar`}></div>
      </Link>
  )
}

export default function Navbar(props) {
  const breakpoint = 80;
  const [scroll, setScroll] = useState("");

  const onScroll = () => {
    const scroll = window.scrollY;
    if (scroll > breakpoint) setScroll("scrolled");
    else setScroll("");
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {window.removeEventListener("scroll", onScroll);};
  }, []);

  return (
    <header className={`navbar-outer ${scroll} ${props.transparent ? '' : 'navbar-background'}`}>
      <div className={`nav-container ${scroll}`}>
        <div className={`navbar-grid-left ${scroll}`}>
          <Link to={`/`}>
            <img className={`logo ${scroll}`}
                 src="https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-cropped-cropped-logoGearsTechRound100x100-1.png"/>
          </Link>
        </div>
        <div className="navbar-grid-right">
          <ReactiveLink name="Projects" path="projects"/>
          <ReactiveLink name="About" path="about"/>
          <ReactiveLink name="Contact" path="contact"/>
        </div>
      </div>
        {
            props.transparent &&
            <div className={`navbar-gradient ${scroll}`}></div>
        }
    </header>
  );
}
