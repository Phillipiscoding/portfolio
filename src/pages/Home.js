import React from "react";
import Header from "../pages/Header";
import Bio from "../pages/Bio";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import WaveDivider from "../components/WaveDivider";

function Home() {
  return (
    <>
      <section id="header-section">
        <Header />
        <WaveDivider />
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
    </>
  );
}

export default Home;
