import React from "react";

import resume from "../images/Nikhath Firdose.pdf";
import github from "../images/github-icon.png";
import twitter from "../images/twitter-icon.png";
import linkedin from "../images/linkedin-icon.png";
import facebook from "../images/facebook-icon.png";
import instagram from "../images/instagram-icon.png";
const Home = () => {
  return (
    <div>
      <header className="header-container">
        <h1 className="heading">Nikhath Firdose</h1>
        <div className="nav-bar">
          <a href="#about-container"> About Me </a>
          <a href="#project-container"> Projects</a>

          <a
            href="mailto:nikhathfirdose3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </header>
      <div className="cover-page">
        <div className="introduction">
          <h1 className="name"> Hey! I am Nikhath Firdose</h1>
          <p className="description">
            An Engineering Student who likes to Design, Create and Build Things
          </p>
          <a href={resume} target="_blank" id="resume">
            Resume
          </a>
        </div>
      </div>
      <div className="media-links">
        <a
          id="profile-link"
          href="https://github.com/nikhathfirdose"
          target="_blank"
        >
          <img src={github} alt="github" />
        </a>
        <a
          id="profile-link"
          href="https://twitter.com/nikhath_firdose"
          target="_blank"
        >
          <img src={twitter} alt="twitter" />
        </a>

        <a
          id="profile-link"
          href="https://www.linkedin.com/in/nikhath-firdose/"
          target="_blank"
        >
          <img src={linkedin} alt="linked-in" />
        </a>
        <a
          id="profile-link"
          href="https://www.facebook.com/profile.php?id=100013857487670"
          target="_blank"
        >
          <img src={facebook} alt="facebook" />
        </a>

        <a
          id="profile-link"
          href="https://www.instagram.com/nikhaaathh/"
          target="_blank"
        >
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default Home;
