import React from "react";
import classes from "./Person.module.css";
// import styled from "styled-components";
// import "./Person.css";
// import Radium from "radium";

// const StyledDiv = styled.div`
//   width: 50%;
//   margin: auto;
//   margin-top: 10px;
//   border: 1px solid #fff;
//   box-shadow: 0 2px 2px rgb(0, 0, 0);
//   padding: 10px;
//   text-align: center;
//   @media (min-width: 800px) {
//     width: 450px;
//   }
// `;
const person = (props) => {
  /*  const style = {
    "@media (min-width: 800px)": {
      width: "450px",
    },
  }; */
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I&apos;m {props.name} my age: {props.age} hello!{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
