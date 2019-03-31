import React, { Component } from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
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
      guessResult: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.shuffleImages = this.shuffleImages.bind(this);
    this.handleIncorrectGuess = this.handleIncorrectGuess.bind(this);
    this.handleCorrectGuess = this.handleCorrectGuess.bind(this);
    this.checkTopScore = this.checkTopScore.bind(this);
  }

  handleClick(e) {
    const id = e.target.attributes.id.value;

    if (
      !this.state.guessResult.length ||
      !this.state.guessResult.includes(id)
    ) {
      this.handleCorrectGuess(id);
    } else if (this.state.guessResult.includes(id)) {
      this.handleIncorrectGuess();
    }
    this.shuffleImages();
  }

  handleCorrectGuess(id) {
    this.setState(
      {
        guessResult: [...this.state.guessResult, id],
        currentScore: this.state.currentScore + 1,
        correct: true
      },
      this.checkTopScore
    );
  }

  handleIncorrectGuess() {
    this.setState({
      guessResult: [],
      currentScore: 0,
      correct: false
    });
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
        />
        <Wrapper>
          {this.state.images.map(image => (
            <Card
              src={image[1]}
              alt="Picture of a cute kitten"
              key={image[0]}
              id={image[0]}
              onClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
