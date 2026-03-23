import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks/")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task List</h1>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;