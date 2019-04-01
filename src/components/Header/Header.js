import React from "react";
import Ticker from "../Ticker/Ticker";
import "./Header.css";

function Header(props) {
  const { currentScore, topScore, wonGame, correct } = props;

  return (
    <header className="header">
      <h1 id="brand">kitty klicker</h1>
      <div id="scoreboard">
        <h4>
          Current Score: {currentScore ? currentScore : 0} | Top Score:{" "}
          {topScore ? topScore : 0}
        </h4>
        <Ticker correct={correct} />
        {wonGame ? (
          <h5>Purrrrfect! You win! Click any image to play again.</h5>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
