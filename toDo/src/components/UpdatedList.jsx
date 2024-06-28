import { useState } from "react";

const UpdatedList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      // it means content is available in task list
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    } else if (newTask.trim() === "") {
      alert("Please enter the task");
    }
  };


    const deleteTask = (taskId) => {
        const updatedTask = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTask)
    }

    const editTask = (taskId, newText) => {
        const updateTask = tasks.map((task) => task.id === taskId ? { ...task, text: newText } : task);
        setTasks(updateTask)
    };

  return (
    <div>
      <input
        type="text"
        id="text"
        value={newTask}
        placeholder="Enter Task"
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>➕</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => editTask(task.id, prompt("Edit Task:", task.text))} >Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdatedList;
