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
      lastChosen: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
        />
        <Wrapper>
          {/* Loop over and render our Card components */}
          {this.state.images.map(image => (
            <Card
              src={image[1]}
              alt="Picture of a cute kitten"
              key={image[0]}
              onClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
