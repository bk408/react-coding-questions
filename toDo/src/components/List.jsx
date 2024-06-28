import { useState } from "react";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") { // it means task in not empty
        // trim removes the white space
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
    
    else if (newTask.trim() === "") {
         alert("Please enter the task");
    }
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTask);
  };

  return (
    <div>
      <input
        type="text"
        id="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button
              onClick={() => editTask(task.id, prompt("Edit task:", task.text))}
            >
              Edit
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
