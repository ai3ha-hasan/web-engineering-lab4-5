import { useState } from 'react';

const initialStudents = [
  { id: 1, name: "Alice", subject: "Math", marks: 85 },
  { id: 2, name: "Bob", subject: "Science", marks: 92 },
  { id: 3, name: "Charlie", subject: "Math", marks: 78 },
  { id: 4, name: "David", subject: "English", marks: 88 },
  { id: 5, name: "Eve", subject: "Science", marks: 95 },
];

export default function MarksTable() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState("");

  // 1. Filter Logic
  const filteredStudents = students.filter(s => 
    s.subject.toLowerCase().includes(filter.toLowerCase())
  );

  // 2. Sort Logic
  const sortByMarks = () => {
    const sorted = [...students].sort((a, b) => b.marks - a.marks);
    setStudents(sorted);
  };

  const resetTable = () => setStudents(initialStudents);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h2>5. Student Marks Table (Sort & Filter)</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text" 
          placeholder="Filter by Subject (e.g. Math)" 
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={sortByMarks}>Sort by Highest Marks</button>
        <button onClick={resetTable} style={{ marginLeft: '10px' }}>Reset</button>
      </div>

      <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.subject}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}