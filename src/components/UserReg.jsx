import { useState } from 'react';

export default function UserReg() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', role: 'Student' });

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { ...form, id: Date.now() }]);
    setForm({ name: '', email: '', role: 'Student' });
  };

  return (
    <div style={{ padding: '10px' }}>
      <h2>3. User Registration</h2>
      <form onSubmit={addUser} style={{ marginBottom: '20px' }}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <select value={form.role} onChange={e => setForm({...form, role: e.target.value})}>
          <option>Student</option><option>Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {users.map(u => (
          <div key={u.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '150px' }}>
            <strong>{u.name}</strong><p>{u.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}