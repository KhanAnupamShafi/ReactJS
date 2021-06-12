import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="userOutput">
      <p>Username: {props.userName}</p>
      <p>Assignment: 1</p>
    </div>
  );
};

export default userOutput;
