import React from "react";
import "./Tasks.css";
const Tasks = ({ tasks, removeTask }) => {
  return (
    <div className="task-container">
      {tasks.map((task, index) => (
        <h2 key={index}>
          {task.taskName}{" "}
          <button
            onClick={(e) => {
              removeTask(e, index);
            }}
          >
            x
          </button>
        </h2>
      ))}
    </div>
  );
};

export default Tasks;
