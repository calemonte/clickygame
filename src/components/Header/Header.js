import React from "react";
import "./Header.css";

function Header(props) {
  const { currentScore, topScore, ticker } = props;

  return (
    <header className="header">
      <h1 id="brand">kitty klicker</h1>
      <div id="scoreboard">
        <h4>
          Current Score: {currentScore ? currentScore : 0} | Top Score:{" "}
          {topScore ? topScore : 0}
        </h4>
        <h5>{ticker ? ticker : "Click any image to get started!"}</h5>
      </div>
    </header>
  );
}

export default Header;
