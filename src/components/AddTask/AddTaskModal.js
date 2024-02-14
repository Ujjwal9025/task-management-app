import React, { useState, useContext } from "react";
import "../../styles/AddTaskModal.css";
import { ModalContext } from "../../Helper/Context";

const AddTaskModal = () => {
  const {modal, setModal} = useContext(ModalContext);

  const [task, setTask] = useState({
    taskName: "",
    taskDescription: "",
    taskStatus: "",
  });

  // Define a function to handle input changes for task fields
  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));

    if(task.taskStatus === ''){
      task.taskStatus = 'added';
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false);
    // Do something with the collected data, e.g., store it in state, send it to a server, etc.
    console.log("Task:", task);
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="modal-content">
        <h1>Task Details</h1>
        <form onSubmit={handleSubmit}>
          {/* Task Name input */}
          <label>
            Task Name:
            <input
              type="text"
              name="taskName"
              value={task.taskName}
              onChange={handleTaskChange}
            />
          </label>

          {/* Task Description input */}
          <label>
            Task Description:
            <textarea
              name="taskDescription"
              value={task.taskDescription}
              onChange={handleTaskChange}
            />
          </label>

          {/* Task Status selection */}
          <label>
            Task Status:
            <select
              name="taskStatus"
              value={task.taskStatus}
              onChange={handleTaskChange}
            >
              <option value="added">Added</option>
              <option value="started">Started</option>
            </select>
          </label>

          {/* Submit button */}
          <button className="ov-btn-slide-left submit-btn">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
