import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { useState } from "react";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "Do some work" },
    { id: 2, taskName: "Do some more work" },
    { id: 3, taskName: "No work avaiable" }
  ]);
  return (
    <div className="container">
      <Form></Form>
      {tasks.map((task) => (
        <Tasks key={task.id} tasks={tasks}></Tasks>
      ))}
    </div>
  );
}

export default App;
