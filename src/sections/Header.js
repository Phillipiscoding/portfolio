import React from "react";
import Logo from "../images/phillip.png";
import BouncingText from "../components/BouncingText";
// import Button from "../components/Buttons";
import WaveDivider from ".././components/WaveDivider";

function Header() {
  const greeting = "Hi, I'm Phillip.".split("");
  return (
    <header id="header">
      <div className="header container">
        <div className="header-container">
          <div className="logo-container spacer layer2 flip">
            <div>
              <img
                src={Logo}
                alt="This is Phillip harden's logo. It is a circle with his initails PH inside of the circle."
                className="drop-down-fade pre-animation"
              />
            </div>
          </div>

          <div className="header-content slide-in pre-animation">
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
              <a
                href="#contact-section"
                className="btn btn-action contact-btn btn-flash"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider />
    </header>
  );
}

export default Header;
