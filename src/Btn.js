import React, { Component, Fragment } from "react";
import IMG_DATA from "./data";

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

export default Btn;
