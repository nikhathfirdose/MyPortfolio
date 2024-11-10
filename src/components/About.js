import React from "react";
// import profile from "../images/Nikhath.jpeg";
function About() {
  return (
    <div id="about-container">
      <h2 className="heading">About me</h2>
      <div className="about-content">
      <div className="image-container">
        {/* <img className="profile-img" src={profile} alt="profile" /> */}
        <div className="about-info">
            <p>
              Hello! I’m Nikhath, a software engineering student at San José State University specializing in distributed systems. 
              I’m passionate about building efficient, data-driven solutions with Java, Python, SQL, and frameworks like React.js and Spring Boot, 
              allowing me to tackle both front-end and back-end projects. This portfolio was first created in 2020 to showcase my journey and projects.
            </p>

            <p>
              Outside of tech, I’m an extrovert who loves traveling and meeting new people. Hiking, exploring new places, 
              and cooking are my favorite ways to unwind. Whether it’s solving tech challenges or finding new trails, I’m always up for an adventure!
            </p>
</div>
        </div>
      </div>
    </div>

    
  );
}

export default About;
