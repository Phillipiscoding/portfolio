import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../images/logo-ebebeb.png";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container" id="nav">
        <div className="logo-container">
          <a href="/">
            <span className="brand-name">Phillip Harden</span>
            <img src={Logo} alt="Logo. Which is a circhle the the initials PH inside it" className="logo" />
          </a>
        </div>

        <ul className={`nav-list ${isActive ? "active" : ""}`}>
          {/* <li onClick={removeActive}>
            <a href="https://github.com/Phillipiscoding/portfolio" className="navLink pointer">
              See Code
            </a>
          </li> */}
          <li>
            <Link
              className="pointer"
              onClick={removeActive}
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
            className="pointer"
              onClick={removeActive}
              activeClass="active"
              to="projects-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
            className="pointer"
              onClick={removeActive}
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleActiveClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
