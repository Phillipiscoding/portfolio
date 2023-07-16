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
    <nav className="nav"  id="nav">
      <div className="nav-container">
        <div className="logo-container">
        <Link
              className="pointer logo"
              onClick={removeActive}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
             
            <img src={Logo} alt="Logo. Which is a circhle the the initials PH inside it" className="logo" />
            </Link>
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
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>
                About
              </span>
            </Link>
          </li>
          <li>
            <Link
            className="pointer"
              onClick={removeActive}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>
                Projects
              </span>
            </Link>
          </li>

          <li>
            <Link
            className="pointer"
              onClick={removeActive}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>
                Contact
              </span>
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
