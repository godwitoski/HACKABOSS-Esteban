import React, { useState } from "react";

const NewTask = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        maxLength="100"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={(evt) => setTaskText(evt.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default NewTask;
