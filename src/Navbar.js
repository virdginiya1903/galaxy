import React, { Component } from "react";
import Btn from "./Btn";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Btn myFunc={this.props.myFunc} />
        </div>
      </div>
    );
  }
}

export default Navbar;
