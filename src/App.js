import React, { Component } from "react";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Card from "./components/Card/Card";

const imageFolder = require("./images/");
const imageSrcArr = Object.entries(imageFolder);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: imageSrcArr,
      topScore: 0,
      currentScore: 0,
      correct: null,
      guessResult: [],
      wonGame: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.shuffleImages = this.shuffleImages.bind(this);
    this.handleFirstGuess = this.handleFirstGuess.bind(this);
    this.handleIncorrectGuess = this.handleIncorrectGuess.bind(this);
    this.handleCorrectGuess = this.handleCorrectGuess.bind(this);
    this.checkTopScore = this.checkTopScore.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
  }

  handleClick(e) {
    const id = e.target.attributes.id.value;

    if (!this.state.guessResult.length) {
      this.handleFirstGuess(id);
    } else if (!this.state.guessResult.includes(id)) {
      this.handleCorrectGuess(id);
    } else if (this.state.guessResult.includes(id)) {
      this.handleIncorrectGuess();
    }
    this.shuffleImages();
    
  }

  handleFirstGuess(id) {
    this.setState(
      {
        guessResult: this.state.guessResult.concat(id),
        currentScore: this.state.currentScore + 1,
        correct: true,
        wonGame: false
      },
      this.checkTopScore
    );
  }

  handleCorrectGuess(id) {
    this.setState(
      {
        guessResult: [...this.state.guessResult, id],
        currentScore: this.state.currentScore + 1,
        correct: true
      },
      () => {
        this.checkTopScore();
        this.checkForWin();
      }
    );
  }

  handleIncorrectGuess() {
    this.setState({
      guessResult: [],
      currentScore: 0,
      correct: false
    });
  }

  checkForWin() {
    if (this.state.guessResult.length === this.state.images.length) {
      this.setState({
        guessResult: [],
        currentScore: 0,
        wonGame: true
      });
    }
  }

  checkTopScore() {
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore
      });
    }
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  shuffleImages() {
    const newArr = this.shuffle(this.state.images);

    this.setState({
      images: newArr
    });
  }

  render() {
    return (
      <div>
        <Header
          topScore={this.state.topScore}
          currentScore={this.state.currentScore}
          correct={this.state.correct}
          wonGame={this.state.wonGame}
        />
        <Board>
          {this.state.images.map(image => (
            <Card
              src={image[1]}
              alt="Picture of a cute kitten"
              key={image[0]}
              id={image[0]}
              onClick={this.handleClick}
            />
          ))}
        </Board>
      </div>
    );
  }
}

export default App;
