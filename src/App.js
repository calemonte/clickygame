import React, { Component } from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";

const imageFolder = require("./images/");
const imageSrcArr = Object.entries(imageFolder);

class App extends Component {
  state = {
    images: imageSrcArr,
    topScore: 0,
    currentScore: 0
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
            <Card src={image[1]} key={image[0]} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
