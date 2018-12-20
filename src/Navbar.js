import React, { Component } from "react";
import Btn from "./Btn";
import IMG_DATA from "./data";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Btn myFunc={this.props.myFunc} data={IMG_DATA} />
        </div>
      </div>
    );
  }
}

export default Navbar;
