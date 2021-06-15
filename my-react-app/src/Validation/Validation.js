import React from "react";

const validation = (props) => {
  let validatioMessage = "Long enough Text";
  if (props.size <= 5) {
    validatioMessage = "Too short Text";
  }

  return (
    <div>
      <p>{validatioMessage}</p>
    </div>
  );
};

export default validation;
