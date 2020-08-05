import React from "react";
import "../index.css";
const Header = () => {
  return (
    <div>
      <header className="header-container">
        <h1 className="left">Nikhath Firdose</h1>
        <div className="right">
          <a href="#"> About Me </a>
          <a href="#"> Projects</a>
          <a href="#"> Resume </a>
          <a href="#"> Contact </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
