import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
const IMG_DATA = {
  BearGuardian:
    "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/73d83f8971.jpg",
  Fish:
    "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/b6fefd6f9b.jpg",
  BigBar:
    "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/7c7a9fe143.jpg",
  Fuhrmann:
    "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/fceb51ffef.jpg"
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
