import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <h1 id="brand">kitty klicker</h1>
      <div id="scoreboard">
        <h4>
          Current Score: {props.currentScore ? props.currentScore : 0} | Top
          Score: {props.topScore ? props.topScore : 0}
        </h4>
        <h4>{props.guess ? props.guess : "Click an image to begin!"}</h4>
      </div>
    </header>
  );
}

export default Header;
