import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <br /><br /><br />
          <header className="App-header">
            <p>
              <h1>Natasha Brayovitch</h1>
              <h1> </h1>
              <h1>2019</h1>
            </p>
            <div className='container'>
              <div className='item'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='overlay'>
                  <h3>Check my portfolio</h3>
                </div>
              </div>
            </div>
            <a
              className="App-link"
              href="https://kodiri.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kodiri.com
          </a>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
