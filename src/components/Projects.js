import React from "react";
import "../project.css";
import quiz from "../images/Quiz.png";
import game from "../images/Game.png";

function Projects() {
  return (
    <div id="project-container">
      <h2 className="heading">projects</h2>
      <div className="projects">
        <div className="project item-1">
          <p className="project-name"> Shopping Page</p>
          <p className="landscape-image first"></p>
          <p className="project-details">
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nikhathfirdose/ShopOnline"
            >
              View on Github
            </a>
            <p className="tech">
              <strong>Technologies used:</strong> HTML, CSS and GSAP Animations{" "}
            </p>
            <p className="project-info">
            A dynamic landing page with CSS animations, offering an engaging user experience. It loads smoothly, presents various shopping options, and uses seamless animations to enhance visual appeal.
            </p>
          </p>
        </div>
        <div className="project item-2">
          <p className="project-name"> Trivia Quiz</p>
          <img src={quiz} alt="quiz" />
          <p className="project-details">
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nikhathfirdose/QuizMania"
            >
              View on Github
            </a>
            <p className="tech">
              <strong>Technologies used:</strong> HTML, CSS, JS
            </p>
            <p className="project-info">
            A JavaScript-powered quiz app featuring multiple-choice questions on basic computer software. Through building this app, I learned to implement dynamic content handling and state management.    </p>
          </p>
        </div>
        <div className="project item-3">
          <p className="project-name"> Tic-Tac-Toe</p>
          <img src={game} alt="game" />
          <p className="project-details">
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nikhathfirdose/TicTacToe"
            >
              View on Github
            </a>
            <p className="tech">
              <strong>Technologies used: </strong> HTML, CSS, ReactJs
            </p>
            <p className="project-info">
            A game built with React Hooks, designed to deepen my understanding of useState and other functional features of React, enhancing my skills in state management and component logic.
            </p>
          </p>
        </div>
        <div className="project item-4">
          <p className="project-name"> Rick and Morty </p>

          <p className="second-img"></p>

          <p className="project-details">
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nikhathfirdose/RickandMorty"
            >
              View on Github
            </a>
            <p className="tech">
              <strong>Technologies used:</strong> HTML/CSS, ReactJS, Bootstrap
            </p>
            <p className="project-info">
            An app that fetches Rick and Morty episodes through an API, where I implemented search functionality and pagination to enhance navigation, helping me deepen my understanding of these key features in React.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
