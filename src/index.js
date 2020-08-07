import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
  </React.StrictMode>,
  document.getElementById("root")
);
