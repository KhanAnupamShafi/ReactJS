import React, { Component } from "react";
import Human from "./Person/Person";
import "./App.css";
import Userinput from "./UserInput/UserInput";
import Useroutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      { name: "Dip", age: "25" },
      { name: "Max", age: "22" },
      { name: "Nahid", age: "33" },
    ],

    otherValue: "Some other value",
    username: "KA Shafi",
  };

  // state = {
  //   username: "KA Shafi",
  // };

  switchNameHandler = (newName) => {
    // console.log("clicked");
    this.setState({
      persons: [
        { name: newName, age: "25" },
        { name: "Anupam", age: "26" },
        { name: "Nahid", age: "25" },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Dip", age: "25" },
        { name: event.target.value, age: "26" },
        { name: event.target.nodeName, age: "25" },
      ],
    });
  };

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    const style = {
      backgroundColor: "#eee",
      font: "inherit",
      border: "3px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>My APP</h1>

        <button style={style} onClick={() => this.switchNameHandler("xxxxx")}>
          Switch Name
        </button>
        <Human
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Hobbies: Gaming
        </Human>
        <Human
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Deep")}
          changed={this.nameChangeHandler}
        >
          Hobbies: racing
        </Human>
        <Human
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Khan")}
          changed={this.nameChangeHandler}
        />

        <Userinput
          changed={this.usernameChangeHandler}
          currentname={this.state.username}
        ></Userinput>
        <Useroutput userName={this.state.otherValue}></Useroutput>
        <Useroutput userName={this.state.username}></Useroutput>

        <Useroutput userName={"Naruto"}></Useroutput>
      </div>
    );
  }
}

export default App;

/* const app = props =>  {

  const [statePerson, setstatePerson] = useState(
    {
    persons: [
      { name: "Dip", age: "25" },
      { name: "Max", age: "22" },
      { name: "Nahid", age: "33" }
    ]

  });


  const [stateOther, setstateOther] = useState(
    {otherValue: [
      {val: "Some other value"},
      {num: 191}
    ]

  });

  console.log(statePerson, stateOther);


  const switchNameHandler = () => {
    // console.log("clicked");
    setstatePerson ({
      persons: [
        { name: "Khan", age: "25" },
        { name: "Anupam", age: "26" },
        { name: "Nahid", age: "25" }
      ],



    })
  }


    return (
      <div className="App">
        <h1>My APP</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Human name={statePerson.persons[0].name} age={statePerson.persons[0].age}> Hobies: Gaming</Human>
        <Human name={statePerson.persons[1].name} age={statePerson.persons[1].age}> Hobies: racing </Human>
        <Human name={statePerson.persons[2].name} age={statePerson.persons[2].age} />
      </div >
    );
  }


export default app; */
