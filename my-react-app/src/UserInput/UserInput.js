import React from "react";

const userIutput = (props) => {
  const istyle = {
    border: "5px solid #e2d",
    padding: "20px",
    margin: "5px",
  };
  return (
    <input
      style={istyle}
      type="text"
      onChange={props.changed}
      value={props.currentname}
    />
  );
};

export default userIutput;
