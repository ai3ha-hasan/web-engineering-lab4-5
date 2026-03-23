import { useState } from 'react';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  return (
    <div className="p-4 border">
      <h2>2. Todo App</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} style={{ textDecoration: t.done ? "line-through" : "" }}>
            {t.text} 
            <button onClick={() => {
              const newTasks = [...tasks];
              newTasks[i].done = !newTasks[i].done;
              setTasks(newTasks);
            }}>Done</button>
            <button onClick={() => setTasks(tasks.filter((_, index) => index !== i))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}