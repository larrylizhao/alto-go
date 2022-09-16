import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage.js';
import useUpdateLogger from './hooks/useUpdateLogger.js';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useLocalStorage('name', () => 'hallo');
  useUpdateLogger(name);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Alto Go</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value) }
        />
    </div>
  )
}

export default App
