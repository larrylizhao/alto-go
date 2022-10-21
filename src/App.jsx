import { useState, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage.js';
import useUpdateLogger from './hooks/useUpdateLogger.js';
import store from './redux/store.js';
import {INCREMENT, DECREMENT} from './redux/actions.js';
import { connect } from 'react-redux';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useLocalStorage('name', () => 'hallo');

  const dep = useMemo(() => ({
      count
  }), [name]);

  useEffect(() => {
      console.count('app run');
      console.log(dep);
  }, [dep])

  useUpdateLogger(name);

  const increment = () => {
      store.dispatch(INCREMENT);
  }

  const decrement = () => {
      store.dispatch(DECREMENT);
  }

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
        <button onClick={increment}>
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

const mapStateToProps = (state) => {

}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
