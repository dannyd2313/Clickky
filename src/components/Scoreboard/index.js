import React from "react";
import "./scoreboard.css";

const Scoreboard = props => (
    <div className="score-container">
      <div className="row justify-content-center">
        <h2>Score: {props.score}</h2>
        <h2>Highest Score: {props.topScore}</h2>
      </div>
      <div className="row justify-content-center">
      <h5 className="description">Click on the Game of Thrones character only once!</h5>
      </div>
    </div>
  );

export default Scoreboard;
