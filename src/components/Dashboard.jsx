// Dashboard.jsx
import { useState } from 'react';
export default function Dashboard() {
  const [tab, setTab] = useState('Profile');
  return (
    <div>
      <h2>10. Dashboard</h2>
      <button onClick={() => setTab('Profile')}>Profile</button>
      <button onClick={() => setTab('Settings')}>Settings</button>
      <div style={{ padding: '10px', background: '#f9f9f9' }}>Active: {tab}</div>
    </div>
  );
}

// Blog.jsx
export function Blog() {
  const posts = [{ id: 1, title: 'React Tips' }, { id: 2, title: 'Vite vs CRA' }];
  return (
    <div>
      <h2>11. Blog Posts</h2>
      {posts.map(p => <div key={p.id} style={{ border: '1px bottom #eee', padding: '5px' }}>{p.title}</div>)}
    </div>
  );
}