import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
