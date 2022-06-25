import React, {useEffect, useRef} from 'react';
import {event} from './bridge';
import logo from './logo.svg';
import './App.css';

function App() {
  const unsubscribers = useRef<any>({});
  useEffect(() => {
    unsubscribers.current.success = event.subscribe('sw:success', (registration) => {
      console.log('=> success REG', registration);
    });
    unsubscribers.current.update = event.subscribe('sw:update', (registration) => {
      console.log('=> update REG', registration);
    });

    return () => {
      unsubscribers.current.success();
      unsubscribers.current.update();
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
