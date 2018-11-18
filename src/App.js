import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import About from './components/About';
import Splash from './components/Splash';
import TopBar from './components/TopBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
          <BrowserRouter>
          <div>
            <nav>
              <span>
                <Link className="App-link" to="/splash">Splash</Link>
                <Link className="App-link" to="/about">About</Link>
              </span>
            </nav>
            <Switch>
              <Route exact={true} path="/ghpages-react" render={(props) => <Splash routerProps={process.env.PUBLIC_URL} logo={logo} />} />
              <Route path="/splash" render={(props) => <Splash routerProps={process.env.PUBLIC_URL} logo={logo} />} />
              <Route path="/about" render={(props) => <About routerProps={process.env.PUBLIC_URL} logo={logo} /> } />
            </Switch>
          </div>
        </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
