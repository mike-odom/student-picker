import React, { Component } from "react";
import MotivationalQuote from "./components/MotivationalQuote";
import SelectedStudent from "./components/SelectedStudent";
import StudentList from "./components/StudentList";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  state = { students: [] };

  componentDidMount() {
    axios.get("/api/students").then(response => {
      this.processStudents(response.data);
    })
  }

  processStudents(students) {
    // Students comes back as an array of objects, put them in array of strings
    
    let studentsArr = students.map(studentObj => studentObj.student);

    this.setState({ students: studentsArr });
  }

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