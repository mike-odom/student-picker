import React, { Component } from "react";
import MotivationalQuote from "./components/MotivationalQuote";
import SelectedStudent from "./components/SelectedStudent";
import StudentList from "./components/StudentList";
import logo from "./logo.svg";
import "./App.css";

// Some data for now
const students = [
  "Aiman",
  "Christina",
  "Charlotte",
  "Dre",
  "Federico",
  "Freddy",
  "Kevin",
  "Keyanna",
  "Sachiko",
];

/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  state = { students: students };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>YOU'RE GONNA TURN THIS BAREBONES BOILERPLATE INTO SOMETHING AMAZING!</h2>
        </div>
        <p className="App-intro">
          <MotivationalQuote />
        </p>
        <SelectedStudent students={this.state.students}/>
        <StudentList students={this.state.students}/>
      </div>
    );
  }
}

export default App;