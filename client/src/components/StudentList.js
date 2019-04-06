import React from 'react';

export default class StudentList extends React.Component {
  state = { selectedStudent: "" }

  render() {
    return (
      <div>
        <ul>
          {this.props.students.map(student => <li>{student}</li>)}
        </ul>
      </div>
    );
  }
}