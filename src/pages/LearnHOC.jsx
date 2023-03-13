import React from "react";

function LearnHOC(Component) {
  return (props) => {
    const style = {
      padding: "0.2rem",
      margin: "1rem",
      backgroundColor: "blue",
      color: "white",
    };
    return <Component style={style} {...props} />;
  };
}

export default LearnHOC;
