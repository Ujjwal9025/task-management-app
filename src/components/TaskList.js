import React, { useState } from "react";

const TaskList = ({ status, tasks, handleStartButton, handleCompletedButton, handleDoneButton }) => {

  return (
    <div>
      <h1>{status}</h1>
      <main>
        {tasks &&
          tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <div key={task.id}>
                <h1>{task.title}</h1>
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
