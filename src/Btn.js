import React, { Fragment } from "react";

// class Btn extends Component {
//   render() {
//     return (
//       <Fragment>
//         {IMG_DATA.map((item, index) => {
//           return (
//             <button
//               key={index}
//               className="btn btn-secondary"
//               onClick={this.props.myFunc}
//               name={item.name}
//               data-url={item.url}
//             >
//               {item.name}
//             </button>
//           );
//         })}
//       </Fragment>
//     );
//   }
// }

const Btn = ({ data, myFunc }) => {
  const elements = data.map(item => {
    return (
      <button
        className="btn btn-secondary"
        onClick={myFunc}
        name={item.name}
        data-url={item.url}
      >
        {item.name}
      </button>
    );
  });
  return <Fragment>{elements}</Fragment>;
};

export default Btn;
