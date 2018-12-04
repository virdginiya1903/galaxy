import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
const IMG_DATA = {
  BearGuardian:
    "https://cdn.pixabay.com/photo/2017/08/17/16/47/bear-guardian-2651965_960_720.jpg",
  Fish:
    "https://cdn.pixabay.com/photo/2017/08/17/16/47/fish-2651966_960_720.jpg",
  BigBar:
    "https://cdn.pixabay.com/photo/2017/08/17/16/48/big-bar-2651972_960_720.jpg",
  Fuhrmann:
    "https://cdn.pixabay.com/photo/2017/08/17/16/48/fuhrmann-2651971_960_720.jpg"
};
class App extends Component {
  state = {
    constellation: " Bear-guardian",
    img: IMG_DATA["BearGuardian"]
  };
  myFunc = e => {
    this.setState({
      constellation: e.currentTarget.textContent,
      img: IMG_DATA[e.currentTarget.dataset.constellation]
    });
  };

  render() {
    return (
      <div className="App ">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="btn btn-secondary"
              onClick={this.myFunc}
              data-constellation="BearGuardian"
            >
              Bear-guardian
            </button>
            <button
              className="btn btn-secondary"
              onClick={this.myFunc}
              data-constellation="Fish"
            >
              Fish
            </button>
            <button
              className="btn btn-secondary"
              onClick={this.myFunc}
              data-constellation="BigBar"
            >
              Big-bar
            </button>
            <button
              className="btn btn-secondary"
              onClick={this.myFunc}
              data-constellation="Fuhrmann"
            >
              Fuhrmann
            </button>
          </div>
        </div>
        <Content url={this.state.img} name={this.state.constellation} />
      </div>
    );
  }
}

export default App;
