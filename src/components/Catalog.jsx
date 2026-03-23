import { useState } from 'react';

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Watch", price: 200 },
  { id: 4, name: "Headphones", price: 150 },
  { id: 5, name: "Keyboard", price: 80 },
  { id: 6, name: "Gaming Mouse", price: 60 },
  { id: 7, name: "Monitor", price: 300 },
  { id: 8, name: "External Drive", price: 120 },
  { id: 9, name: "Tablet", price: 450 },
  { id: 10, name: "Bluetooth Speaker", price: 90 },
  { id: 11, name: "Webcam", price: 70 },
  { id: 12, name: "Smart Home Hub", price: 130 },
  { id: 13, name: "USB-C Hub", price: 40 }
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
