import React from "react";

function Task({ task, onDelete}) {
  function handleDelete () {
    onDelete(task.text);
  }
  return (
    <div className="task">
      <div className="label">{task.text}</div>
      <div className="text">{task.category}</div>
      <li>
        <p>
          {task.text}
          {task.category}
        </p>
      </li>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;