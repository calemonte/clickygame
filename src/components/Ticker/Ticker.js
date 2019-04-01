import React from "react";

function Ticker(props) {
  const { correct } = props;
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

  return ticker;
}

export default Ticker;
