import { useState } from 'react';

export default function UniPortal() {
  const [students, setStudents] = useState([{ name: 'Aisha', id: '101' }]);
  const [name, setName] = useState('');

  return (
    <div style={{ border: '2px solid navy', padding: '15px' }}>
      <h2>12. University Portal</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Student Name" />
      <button onClick={() => { setStudents([...students, { name, id: Date.now().toString() }]); setName(''); }}>Add</button>
      <ul>{students.map(s => <li key={s.id}>{s.name} (ID: {s.id})</li>)}</ul>
    </div>
  );
}