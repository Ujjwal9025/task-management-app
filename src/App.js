import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

const initialTasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is my task description",
    status: "added",
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is my task description",
    status: "added",
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is my task description",
    status: "started",
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is my task description",
    status: "added",
  },
  {
    id: 5,
    title: "Task 5",
    description: "This is my task description",
    status: "started",
  },
  {
    id: 6,
    title: "Task 6",
    description: "This is my task description",
    status: "added",
  },
  {
    id: 7,
    title: "Task 7",
    description: "This is my task description",
    status: "completed",
  },
  {
    id: 8,
    title: "Task 8",
    description: "This is my task description",
    status: "added",
  },
  {
    id: 9,
    title: "Task 9",
    description: "This is my task description",
    status: "completed",
  },
  {
    id: 10,
    title: "Task 10",
    description: "This is my task description",
    status: "completed",
  },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const added = "added";
  const started = "started";
  const completed = "completed";

  const handleStartButton = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "started" } : task
    );
    setTasks(updatedTasks);
  };

  const handleCompletedButton = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "completed" } : task
    );
    setTasks(updatedTasks);
  };

  const handleDoneButton = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: "remove" } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Navbar />
      <section>
        <TaskList status={added} tasks={tasks} handleStartButton={handleStartButton} handleCompletedButton={handleCompletedButton} handleDoneButton={handleDoneButton}/>
        <TaskList status={started} tasks={tasks} handleStartButton={handleStartButton} handleCompletedButton={handleCompletedButton} handleDoneButton={handleDoneButton}/>
        <TaskList status={completed} tasks={tasks} handleStartButton={handleStartButton} handleCompletedButton={handleCompletedButton} handleDoneButton={handleDoneButton}/>
      </section>
    </div>
  );
};

export default App;
