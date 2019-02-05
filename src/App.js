import React, { Component } from 'react';
import logo from './logo.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h1>Natasha Brayovitch</h1>
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            My portfolio
          </a>
        </header>
      </div>
    );
  }
}

export default App;
