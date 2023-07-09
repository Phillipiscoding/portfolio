import React from "react";
import Header from "../pages/Header";
import About from "../pages/About";
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
      <section id="about-section">
        <About />
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
