import React, { Component } from "react";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Card from "./components/Card/Card";
import images from "./images/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      topScore: 0,
      currentScore: 0,
      guessResult: [],
      ticker: ""
    };
  }

  handleClick = id => {
    if (
      !this.state.guessResult.length ||
      !this.state.guessResult.includes(id)
    ) {
      this.handleCorrectGuess(id);
    } else if (this.state.guessResult.includes(id)) {
      this.handleIncorrectGuess();
    }
    this.shuffleImages();
  };

  handleCorrectGuess = id => {
    this.setState(
      {
        guessResult: [...this.state.guessResult, id],
        currentScore: this.state.currentScore + 1,
        ticker: "Nice! You haven't guessed that kitty yet."
      },
      () => {
        this.checkTopScore();
        this.checkForWin();
      }
    );
  };

  handleIncorrectGuess = () => {
    this.setState({
      guessResult: [],
      currentScore: 0,
      ticker: "Sorry! You already guessed that kitty. Try again!"
    });
  };

  checkForWin = () => {
    if (this.state.guessResult.length === this.state.images.length) {
      this.setState({
        guessResult: [],
        currentScore: 0,
        ticker: "Purrrrfect! You win! Click any image to play again."
      });
    }
  };

  checkTopScore = () => {
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore
      });
    }
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  shuffleImages = () => {
    const newArr = this.shuffle(this.state.images);

    this.setState({
      images: newArr
    });
  };

  render() {
    return (
      <div>
        <Header
          topScore={this.state.topScore}
          currentScore={this.state.currentScore}
          ticker={this.state.ticker}
        />
        <Board>
          {this.state.images.map(image => (
            <Card
              src={image.src}
              alt={image.name}
              key={image.id}
              id={image.id}
              handleClick={this.handleClick}
            />
          ))}
        </Board>
      </div>
    );
  }
}

export default App;
