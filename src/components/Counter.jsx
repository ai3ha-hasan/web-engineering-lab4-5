import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleUpdate = (val) => {
    const newCount = val === 'reset' ? 0 : count + val;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  return (
    <div className="p-4 border">
      <h2>1. Counter with History</h2>
      <h1>{count}</h1>
      <button onClick={() => handleUpdate(1)}>Increment</button>
      <button onClick={() => handleUpdate(-1)}>Decrement</button>
      <button onClick={() => {setCount(0); setHistory([]);}}>Reset</button>
      <p>History: {history.join(", ")}</p>
    </div>
  );
}