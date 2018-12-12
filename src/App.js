import React, { Component, Fragment } from "react";
import "./App.css";
import Content from "./Content";

const IMG_DATA = [
  {
    name: "BearGuardian",
    url:
      "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/73d83f8971.jpg"
  },
  {
    name: "Fish",
    url:
      "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/b6fefd6f9b.jpg"
  },
  {
    name: "BigBar",
    url:
      "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/7c7a9fe143.jpg"
  },
  {
    name: "Fuhrmann",
    url:
      "http://dl3.joxi.net/drive/2018/12/08/0027/3308/1830124/24/fceb51ffef.jpg"
  }
];

class Btn extends Component {
  render() {
    return (
      <Fragment>
        {IMG_DATA.map((item, index) => {
          return (
            <button
              key={index}
              className="btn btn-secondary"
              onClick={this.props.myFunc}
              name={item.name}
              data-url={item.url}
            >
              {item.name}
            </button>
          );
        })}
      </Fragment>
    );
  }
}

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
    console.log(e.target.url);
  };

  render() {
    return (
      <div className="App ">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Btn myFunc={this.myFunc} />
          </div>
        </div>
        <Content url={this.state.url} name={this.state.name} />
      </div>
    );
  }
}

export default App;
