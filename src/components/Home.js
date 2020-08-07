import React from "react";
import resume from "../images/Nikhath Firdose.pdf";
const Home = () => {
  return (
    <div>
      <header className="header-container">
        <h1 className="heading">Nikhath Firdose</h1>
        <div className="nav-bar">
          <a href="#about-container"> About Me </a>
          <a href="#project-container"> Projects</a>
          <a href="#"> Contact </a>
        </div>
      </header>
      <div className="cover-page">
        <div className="introduction">
          <h1 className="name"> Hey! I am Nikhath Firdose</h1>
          <p className="description">
            A Junior Web-Developer who likes to Create. Build and Design Things
          </p>
          <a href={resume} target="_blank" className="resume">
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
          <img
            src="https://i.postimg.cc/sD5PRDMy/Programming-Github-icon.png"
            alt="github"
          />
        </a>
        <a
          id="profile-link"
          href="https://twitter.com/nikhath_firdose"
          target="_blank"
        >
          <img
            src="https://i.postimg.cc/8cJSrvgF/Social-Networks-Twitter-icon.png"
            alt="twitter"
          />
        </a>

        <a
          id="profile-link"
          href="https://www.linkedin.com/in/nikhath-firdose/"
          target="_blank"
        >
          <img src="https://i.postimg.cc/8zrSCMBx/Social-Networks-Linkedin-icon.png" />
        </a>
        <a
          id="profile-link"
          href="https://www.facebook.com/profile.php?id=100013857487670"
          target="_blank"
        >
          <img
            src="https://i.postimg.cc/fywztyTm/Social-Networks-Facebook-icon.png"
            alt="facebook"
          />
        </a>

        <a
          id="profile-link"
          href="https://www.instagram.com/nikhaaathh/"
          target="_blank"
        >
          <img
            src="https://i.postimg.cc/66GLYQct/Social-Networks-Instagram-icon-1.png"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
