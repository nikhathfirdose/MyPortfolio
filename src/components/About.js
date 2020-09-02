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
            Hi! I am Nikhath Firdose. I am pursuing my Bachelors in Electronics
            and Instrumentation Engineering. I am an optimistic, ambitious, and
            goal-oriented person and have a keen interest in Web Development. I
            am looking forward to oppurtunities and growth in the IT Industry
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
