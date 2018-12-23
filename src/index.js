import React from "react";
import ReactDOM from "react-dom";
import useStudentsState from "./stateStudents";
import "./styles.css";
const serialize = require("form-serialize");
const uid = require("uid-safe");

const App = () => {
  const { students, addStudent, removeStudent } = useStudentsState();
  const submit = e => {
    e.preventDefault();
    let data = serialize(e.target, { hash: true });
    data.id = uid.sync(18);
    addStudent(data);
  };
  return (
    <div className="App">
      {students.map(student => (
        <div>
          <span>{student.name}</span>
          <button onClick={() => removeStudent(student.id)}>x</button>
        </div>
      ))}

      <form onSubmit={submit} id="form">
        <div>
          <input type="text" placeholder="name" name="name" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
