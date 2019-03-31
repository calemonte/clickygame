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
      incorrect: null,
      guessResult: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.target.attributes.id.value;
    console.log(this.state.guessResult);

    if (
      !this.state.guessResult.length ||
      !this.state.guessResult.includes(id)
    ) {
      this.setState(state => {
        const updatedList = state.guessResult.concat(id);
        return {
          guessResult: updatedList,
          currentScore: state.currentScore + 1,
          incorrect: false
        };
      });
    } else if (this.state.guessResult.includes(id)) {
      console.log("true");
      this.setState({
        guessResult: [],
        currentScore: 0,
        incorrect: true
      });
    }

    const newArr = this.shuffleImages(this.state.images);

    this.setState({
      images: newArr
    });
  }

  shuffleImages = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  render() {
    return (
      <div>
        <Header
          topScore={this.state.topScore}
          currentScore={this.state.currentScore}
          incorrect={this.state.incorrect}
        />
        <Wrapper>
          {/* Loop over and render our Card components */}
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
