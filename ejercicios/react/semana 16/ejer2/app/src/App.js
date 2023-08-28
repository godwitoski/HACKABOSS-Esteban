import "./App.css";
import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {
  const taskslist = JSON.parse(localStorage.getItem("tasks")) || [
    {
      id: 1,
      task: "Ir a la compra",
      done: false,
    },
    {
      id: 2,
      task: "Hacer ejercicios de react",
      done: true,
    },
  ];

  const [tasks, setTasks] = useState(taskslist);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      task: taskText,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <main>
      <p>Hola desde React!</p>
      <h1>Task List</h1>
      <NewTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskDone={toggleTaskDone} />
    </main>
  );
}

export default App;
