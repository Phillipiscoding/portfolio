import React from "react";
import Logo from "../images/logo-ebebeb.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <div>
            <img
              src={Logo}
              alt="Phillip Harden's logo. The letter PH inside of a circle"
              className="footer-logo"
            />
          </div>

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
              <a href="https://twitter.com/Phillipiscoding">Twitter </a>
            </li>
            <li>
              <a href="https://www.instagram.com/phillipiscoding/">
                Instagram{" "}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Phillipiscoding">Facebook </a>
            </li>
          </ul>
        </div>
        <div></div>

        <div>
          <p className="copyright">&copy; 2023 Phillip Harden</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
