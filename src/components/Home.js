import React from "react";
import "../index.css";
const Home = () => {
  return (
    <div>
      <header className="header-container">
        <h1 className="heading">Nikhath Firdose</h1>
        <div className="nav-bar">
          <a href="#"> About Me </a>
          <a href="#"> Projects</a>
          <a href="#"> Resume </a>
          <a href="#"> Contact </a>
        </div>
      </header>
      <div className="cover-page">
        <div className="introduction">
          <h1 className="name"> Hey!, I am Nikhath Firdose</h1>
          <p className="description"> i am a web devdeloper</p>
        </div>
      </div>
      <div className="media-links"> social media</div>
    </div>
  );
};

export default Home;
