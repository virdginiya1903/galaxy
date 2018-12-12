import React, { Component, Fragment } from "react";
import "./App.css";
import Content from "./Content";
import Btn from "./Btn";

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
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Btn myFunc={this.myFunc} />
          </div>
        </div>
        <Content url={this.state.url} name={this.state.name} />
      </Fragment>
    );
  }
}

export default App;
