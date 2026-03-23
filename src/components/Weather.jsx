import { useState } from 'react';

export default function Weather() {
  const [c, setC] = useState('');
  const [history, setHistory] = useState([]);

  const convert = () => {
    const f = (c * 9/5) + 32;
    setHistory([`${c}°C = ${f.toFixed(1)}°F`, ...history]);
  };

  return (
    <div>
      <h2>8. Temp Converter</h2>
      <input type="number" value={c} onChange={e => setC(e.target.value)} placeholder="Celsius" />
      <button onClick={convert}>Convert</button>
      <ul>{history.map((h, i) => <li key={i}>{h}</li>)}</ul>
    </div>
  );
}