import React from "react";
import Logo from "../images/logo.png";
import BouncingText from "../components/BouncingText";
// import Button from "../components/Buttons";

function Header() {
  const greeting = "Hi, I'm Phillip.".split("");
  return (
    <div className="header container">
      <div className="header-container">
        <div className="logo-container spacer layer2 flip">
          <div className="pink">
            <img
              src={Logo}
              alt="This is Phillip harden's logo. It is a circle with his initails PH inside of the circle."
            />
          </div>
        </div>

        <div className="header-content">
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
