import React from "react";
import Logo from "../images/logo-ebebeb.png";

function Footer() {
  const currentYear = new Date().getFullYear();
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
              <a href="https://github.com/PhillipHarden" target="_new">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/phillip-harden-a3279a1b3/" target="_new">
                LinkedIn{" "}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Phillipiscoding" target="_new">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/phillipiscoding/" target="_new">
                Instagram{" "}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Phillipiscoding" target="_new">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="footer-divider"></div>

        <div className="copyright-div">
          <p className="copyright">&copy; {currentYear} Phillip Harden</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
