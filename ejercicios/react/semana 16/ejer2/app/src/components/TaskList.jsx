import React from "react";

const TaskList = ({ tasks, toggleTaskDone }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? "done" : undefined}>
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTaskDone(task.id)}
            />
            {task.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
