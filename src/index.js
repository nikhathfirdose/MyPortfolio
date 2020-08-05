import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <Home />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
