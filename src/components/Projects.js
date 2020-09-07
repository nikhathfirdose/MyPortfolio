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
              Landing page designed with CSS animations. It loads the webpage
              and displays various shopping options available to users
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
              A Quiz app built with JS, which loads basic Computer software
              questions with multiple choice answers. It also displays the Top 5
              players on leader board
            </p>
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
              Game built with React Hooks. helped in understanding of useState
              and other functional properties of React
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
              Fetches data after making an API call and displays the episodes of
              Rick and Morty with functionality of search and pagination
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
