import React, { Component, Fragment } from "react";
import "./App.css";
import Content from "./Content";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    name: "BearGuardian",
    url:
      "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/73d83f8971.jpg"
  };

  myFunc = e => {
    this.setState({
      name: e.target.name,
      url: e.currentTarget.dataset.url
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar myFunc={this.myFunc} />
        <Content url={this.state.url} name={this.state.name} />
      </Fragment>
    );
  }
}

export default App;
