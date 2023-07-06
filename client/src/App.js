import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Cursor />
      <div className="app">
        <Nav />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
