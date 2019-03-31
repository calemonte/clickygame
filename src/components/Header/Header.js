import React from "react";
import "./Header.css";

function Header(props) {
  const { currentScore, topScore, guessResult } = props;
  return (
    <header className="header">
      <h1 id="brand">kitty klicker</h1>
      <div id="scoreboard">
        <h4>
          Current Score: {currentScore ? currentScore : 0} | Top
          Score: {topScore ? topScore : 0}
        </h4>
        <h5>{guessResult ? guessResult : "Click an image to begin!"}</h5>
      </div>
    </header>
  );
}

export default Header;
