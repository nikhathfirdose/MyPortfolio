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
