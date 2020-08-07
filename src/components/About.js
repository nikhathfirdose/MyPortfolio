import React from "react";
import profile from "../images/picture.jpg";
function About() {
  return (
    <div id="about-container">
      <h2 className="heading">About me</h2>
      <div className="about-content">
        <img className="profile-img" src={profile} />
        <div className="about-info">
          <p>
            Hi! I am Nikhath Firdose and I am pursuing B.Tech in Electronics and
            Instrumentation Engineering. I am an optimistic, ambitious, and
            goal-oriented person and have a keen interest in Web programming. I
            am looking forward to new oppurtunities in in the IT Industry
            {/* <br />
            Looking for oppurtunities in the IT idustry to have a challenging
            career path */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
