import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="container">
        <p className="text-muted">{this.props.name}</p>
        <img src={this.props.url} alt="pic" />
      </div>
    );
  }
}

export default Content;
