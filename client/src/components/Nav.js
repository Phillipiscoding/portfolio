import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import Menu from '../icons/menu.png';

function Nav() {
  const [lastScrollTop, setLastScrollTop] = useState(0);






  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const navbar = document.getElementById("nav");
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
      } else {
        navbar.style.top = "0";
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav id="nav" className="brand-font">
      <div>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      {/* <ul>
        <li>
          <a href="/about">Bio</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      
      </ul> */}
      <img src={Menu} className="menu" />
    </nav>
  );
}

export default Nav;
