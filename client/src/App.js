import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//^ STYLES
import "./styles/App.css";
//^ COMPONENTS
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
//^ PAGES
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
