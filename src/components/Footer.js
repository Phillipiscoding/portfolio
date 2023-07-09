import React from "react";
import Logo from "../images/logo-ebebeb.png";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-top">
     
            <img
              src={Logo}
              alt="Phillip Harden's logo. The letter PH inside of a circle"
              className="footer-logo"
            />
        

          <ul>
            <li>
              <a href="https://github.com/PhillipHarden">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/phillip-harden-a3279a1b3/">
                LinkedIn{" "}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Phillipiscoding">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/phillipiscoding/">
                Instagram{" "}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Phillipiscoding">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="footer-divider"></div>

        <div className="copyright-div">
          <p className="copyright">&copy; 2023 Phillip Harden</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
