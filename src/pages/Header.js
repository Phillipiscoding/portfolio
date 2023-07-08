import React from "react";
import Hero from "../images/phillip.png";
import Logo from "../images/logo.png";
import BouncingText from "../components/BouncingText";
// import Button from "../components/Buttons";

function Header() {
  const greeting = "Hi, I'm Phillip.".split("");
  return (
    <div className="header container">
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} />
        </div>

        <div className="header-conetent">
          <h1 className="brand-font greeting">
            {greeting.map((letter, index) => {
              return <BouncingText key={index}>{letter}</BouncingText>;
            })}
          </h1>

          <p className="greeting-message">
            As a <span className="webdev">Web Developer</span> specializing in
            Frontend development, my focus lies in crafting captivating and
            user-friendly Websites and Web Applications. I strive to create
            exceptional Frontend experiences that leave a lasting impression.
          </p>

          <div className="contact-btn-container">
            <a href="#contact-section" className="btn btn-action contact-btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
