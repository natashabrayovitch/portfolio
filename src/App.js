
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details/Details';
import NotFound from './NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Gallery} />
              <Route exact path='/not-found' component={NotFound} />
              <Route exact path='/:galleryId' component={Details} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

