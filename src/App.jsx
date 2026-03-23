import { useState } from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Catalog from './components/Catalog'


function App() {
  const [tab, setTab] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Web Engineering Lab</h1>
      <nav>
        <button onClick={() => setTab(1)}>Q1: Counter</button>
        <button onClick={() => setTab(2)}>Q2: Todo</button>
        <button onClick={() => setTab(4)}>Q4: Catalog</button>
      </nav>

      <hr />

      {tab === 1 && <Counter />}
      {tab === 2 && <Todo />}
      {tab === 4 && <Catalog />}
    </div>
  )
}

export default App