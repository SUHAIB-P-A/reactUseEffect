
import './App.css';
import Counter from './components/Counter';
import {useState } from 'react';



function App() {
  const [state, setState] = useState(false)

  return (
    <div >
      <h1 onClick={() => setState(!state)} >Show / Hide</h1>
      {state && <Counter />}
    </div>
  );
}

export default App;

// importent terms

// MOUNTING - load a new component
// UPDATING - update a component
// UNMOUNTING - remove a component