import React from "react";
import "./Header.css";

function Header(props) {
  const { currentScore, topScore, correct, wonGame } = props;
  let ticker;

  switch (correct) {
    case true:
      ticker = <h5>Nice! You haven't guessed that kitty yet.</h5>;
      break;
    case false:
      ticker = <h5>Sorry! You already guessed that kitty. Try again!</h5>;
      break;
    default:
      ticker = <h5>Click any image to get started!</h5>;
      break;
  }

  return (
    <header className="header">
      <h1 id="brand">kitty klicker</h1>
      <div id="scoreboard">
        <h4>
          Current Score: {currentScore ? currentScore : 0} | Top Score: {topScore ? topScore : 0}
        </h4>
        {ticker}
        {wonGame ? <h5>Purrrrfect! You win! Click any image to play again.</h5> : null}
      </div>
    </header>
  );
}

export default Header;
