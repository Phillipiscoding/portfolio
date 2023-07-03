import Logo from "../images/logo.png";

function Nav() {

  return (
    <nav id="nav" className="brand-font">
      <div>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <ul>
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
      </ul>
    </nav>
  );
}

export default Nav;
