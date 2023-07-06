import React from "react";
import Hero from "../images/phillip.png";
import BouncingText from "../components/BouncingText";

import Header from "../pages/Header";
import Bio from "../pages/Bio";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

function Home() {
  const greeting = "Hi, I'm Phillip.".split("");
  return (
    <div className="container">
      <section id="header-section">
        <Header />
      </section>
      <section id="bio-section">
        <Bio />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
