import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <Projects />
  </React.StrictMode>,
  document.getElementById("root")
);
