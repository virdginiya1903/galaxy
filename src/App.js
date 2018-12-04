import React, { Component } from "react";
import "./App.css";

class App extends Component {
  myFunc = () => {
    console.log(1);
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
      </div>
    );
  }
}

export default App;
