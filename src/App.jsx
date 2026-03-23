import { useState } from 'react'

// Import all your components
import Counter from './components/Counter'
import Todo from './components/Todo'
import UserReg from './components/UserReg'
import Catalog from './components/Catalog'
import Quiz from './components/Quiz'
import Weather from './components/Weather'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import UniPortal from './components/UniPortal'
import Header from './components/Header'

function App() {
  const [tab, setTab] = useState(1);

  // Style for the navigation container
  const navStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
    padding: '10px',
    background: '#f4f4f4',
    borderRadius: '8px'
  };

  // Style for the buttons
  const btnStyle = (active) => ({
    padding: '8px 12px',
    cursor: 'pointer',
    backgroundColor: active ? '#007bff' : '#fff',
    color: active ? '#fff' : '#000',
    border: '1px solid #007bff',
    borderRadius: '4px'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Web Engineering Lab 4-5</h1>
      <Header />
      
      <nav style={navStyle}>
        <button style={btnStyle(tab === 1)} onClick={() => setTab(1)}>Q1: Counter</button>
        <button style={btnStyle(tab === 2)} onClick={() => setTab(2)}>Q2: Todo</button>
        <button style={btnStyle(tab === 3)} onClick={() => setTab(3)}>Q3: Registration</button>
        <button style={btnStyle(tab === 4)} onClick={() => setTab(4)}>Q4: Catalog</button>
        <button style={btnStyle(tab === 5)} onClick={() => setTab(5)}>Q5: Marks</button>
        <button style={btnStyle(tab === 7)} onClick={() => setTab(7)}>Q7: Quiz</button>
        <button style={btnStyle(tab === 8)} onClick={() => setTab(8)}>Q8: Weather</button>
        <button style={btnStyle(tab === 9)} onClick={() => setTab(9)}>Q9: Cart</button>
        <button style={btnStyle(tab === 10)} onClick={() => setTab(10)}>Q10: Dashboard</button>
       
        <button style={btnStyle(tab === 12)} onClick={() => setTab(12)}>Q12: University</button>
      </nav>

      <div style={{ border: '2px solid #eee', padding: '20px', borderRadius: '10px' }}>
        {tab === 1 && <Counter />}
        {tab === 2 && <Todo />}
        {tab === 3 && <UserReg />}
        {tab === 4 && <Catalog />}
        {tab === 5 && <MarksTable />}
        {tab === 7 && <Quiz />}
        {tab === 8 && <Weather />}
        {tab === 9 && <Cart />}
        {tab === 10 && <Dashboard />}
        {tab === 11 && <Blog />}
        {tab === 12 && <UniversityPortal />}
      </div>
    </div>
  )
}

export default App