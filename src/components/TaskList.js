import React from "react";
import { TASKS } from "../data";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {TASKS.map(task => (
          < Task key={task.text} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;