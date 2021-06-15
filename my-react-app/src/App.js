import React, { Component } from "react";

import Persons from "./Person/Person";
import "./App.css";
import Userinput from "./UserInput/UserInput";
import Useroutput from "./UserOutput/UserOutput";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
// import { SketchPicker } from "react-color";

class App extends Component {
  state = {
    persons: [
      { id: "myid1", name: "Dip", age: "25" },
      { id: "myid2", name: "Max", age: "22" },
      { id: "myid3", name: "Nahid", age: "33" },
    ],

    otherValue: "Some other value",
    username: "KA Shafi",
    showPersons: false,
    textInput: "",
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    // console.log(personIndex);
    /* logs person index number {not value} where clicked */
    const person = { ...this.state.persons[personIndex] };
    // console.log(person);
    person.name = event.target.value;
    // console.log(person.name);       /* show input name typed given textfield */

    const oldpersons = [...this.state.persons];
    oldpersons[personIndex] = person;

    this.setState({ persons: oldpersons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  /* assignment 1 */
  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  /* assignment 2 */
  inputChangehandler = (event) => {
    this.setState({
      textInput: event.target.value,
    });
  };

  deleteInputHandler = (index) => {
    const text = this.state.textInput.split("");
    text.splice(index, 1);
    const updatedtext = text.join("");
    this.setState({
      textInput: updatedtext,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "3px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Persons
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    // ASSIGNMENT - 2
    const charText = this.state.textInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteInputHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <div>
          <h1>My App</h1>
          <p className={classes.join(" ")}>This is a React.js App</p>

          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Names
          </button>

          {persons}
        </div>

        {/* assignment-1 */}
        <div>
          <Userinput
            changed={this.usernameChangeHandler}
            currentname={this.state.username}
          />
          <br />
          <Useroutput userName={this.state.otherValue} />
          <Useroutput userName={this.state.username} />
          <Useroutput userName="Norman" />
          <br />
        </div>

        <div>
          {/* asignment 2 */}
          <br />
          <input
            type="text"
            onChange={this.inputChangehandler}
            value={this.state.textInput}
          />
          <br />
          {this.state.textInput}
          <br />
          <Validation size={this.state.textInput.length} />

          {charText}
        </div>
      </div> /* <----class app ends */
    );
  }
}

/*  <div>
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
        </div> */
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
