import React from 'react';
import './App.css';

import { Routes } from './route/route'

function App() {
  // let history = useHistory()

  // function viewPortfolio() {
  //   history.push("/home")
  //  }
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
