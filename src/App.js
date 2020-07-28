import React from "react";
import "./App.css";
import { useState } from "react";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "Do some work" },
    { id: 2, taskName: "Do some more work" },
    { id: 3, taskName: "No work avaiable" },
  ]);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = [
      { id: Math.floor(Math.random() * 20) + 4, taskName: todo },
      ...tasks,
    ];
    setTasks(newTodo);
    setTodo("");
  };
  const removeTask = (e, index) => {
    e.preventDefault();
    const remainTodo = [...tasks];
    const newRemainTodo = remainTodo.splice(index, 1);
    setTasks(remainTodo);
  };
  return (
    <div className="container">
      <div className="todo-are">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="What to do ?"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </form>
        </div>
        {/* {tasks.map((task) => (
          <Tasks key={task.id} tasks={task} removeTask={removeTask}></Tasks>
        ))} */}
        <Tasks tasks={tasks} removeTask={removeTask}></Tasks>
      </div>
    </div>
  );
}

export default App;
