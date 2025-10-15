
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';



function App() {
  const [count, setCount] = useState(false)

  return (
    <div >
      <h1 onClick={() => setCount(!count)} >Show / Hide</h1>
      {count && <Counter />}
    </div>
  );
}

export default App;

// importent terms

// MOUNTING - load a new component
// UPDATING - update a component
// UNMOUNTING - remove a component