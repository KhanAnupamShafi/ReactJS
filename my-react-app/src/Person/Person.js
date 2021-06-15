import React from "react";
import "./Person.css";
// import Radium from "radium";
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I&apos;m {props.name} my age: {props.age} hello!{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
