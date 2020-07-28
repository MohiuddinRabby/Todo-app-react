import React from "react";
import "./Tasks.css";
const Tasks = (props) => {
  const { taskName } = props.tasks;
  return (
    <div className="task-container">
      <h2>{taskName}</h2> 
    </div>
  );
};

export default Tasks;
