import { useState } from 'react';

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Watch", price: 200 }
];

export default function Catalog() {
  const [search, setSearch] = useState("");

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 border">
      <h2>4. Product Catalog</h2>
      <input placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      {filtered.map(p => <div key={p.id}>{p.name} - ${p.price}</div>)}
    </div>
  );
  
}
