import React, { useState } from "react";
import "../styles/TaskList.css";

const TaskList = ({ status, tasks, handleStartButton, handleCompletedButton, handleDoneButton }) => {

  return (
    <div className="task-list-container">
      <h1>{status}</h1>
      <main className="task-tiles-container">
        {tasks &&
          tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <div key={task.id}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                {(status === 'added') ? <button onClick={() => handleStartButton(task.id)}>Start</button> : null}
                {(status === 'started') ? <button onClick={() => handleCompletedButton(task.id)}>Completed</button> : null}
                {(status === 'completed') ? <button onClick={() => handleDoneButton(task.id)}>Done</button> : null}
              </div>
            ))}
      </main>
    </div>
  );
};

export default TaskList;
