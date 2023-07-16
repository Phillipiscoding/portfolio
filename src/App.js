import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.scss";
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// Sections
import Header from "./sections/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
      <>
        <Nav />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
  );
}

export default App;
