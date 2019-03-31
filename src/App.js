import React, { Component } from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";
import {
  Img01,
  Img02,
  Img03,
  Img04,
  Img05,
  Img06,
  Img07,
  Img08,
  Img09,
  Img10,
  Img11,
  Img12
} from "./images/index";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <Card src={Img01} />
          <Card src={Img02} />
          <Card src={Img03} />
          <Card src={Img04} />
          <Card src={Img05} />
          <Card src={Img06} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
