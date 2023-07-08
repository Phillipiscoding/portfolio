import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// import Bio from "./pages/Bio";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
// import Sandbox from "./pages/Sandbox";
// import Cursor from "./components/TrailingCursor";
import Cursor from "./components/Cursor";

function App() {
  return (
    <Router>
      <Cursor />
      <div className="app">
        <Nav />
        <div className="body">
         
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              {/* <Route exact path="/resume" element={<Resume />} /> */}
            </Routes>
      
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
