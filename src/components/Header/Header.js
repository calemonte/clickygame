import React from "react";
import "./Header.css";

function Header(props) {
  const { currentScore, topScore, incorrect } = props;
  return (
    <header className="header">
      <h1 id="brand">kitty klicker</h1>
      <div id="scoreboard">
        <h4>
          Current Score: {currentScore ? currentScore : 0} | Top
          Score: {topScore ? topScore : 0}
        </h4>
        <h5>{incorrect ? "Sorry! You already guessed that kitty." : "Click an image to begin!"}</h5>
      </div>
    </header>
  );
}

export default Header;
