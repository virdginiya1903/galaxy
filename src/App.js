import React, { Component } from "react";
import "./App.css";

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
    constellation: " Bear-guardian"
  };
  myFunc = e => {
    this.setState({
      constellation: e.currentTarget.textContent
    });
  };

  render() {
    return (
      <div className="App ">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button className="btn btn-secondary" onClick={this.myFunc}>
              Bear-guardian
            </button>
            <button className="btn btn-secondary" onClick={this.myFunc}>
              Fish
            </button>
            <button className="btn btn-secondary" onClick={this.myFunc}>
              Big-bar
            </button>
            <button className="btn btn-secondary" onClick={this.myFunc}>
              Fuhrmann
            </button>
          </div>
        </div>
        <div className="container">
          <p className="text-primary">{this.state.constellation}</p>
        </div>
      </div>
    );
  }
}

export default App;
