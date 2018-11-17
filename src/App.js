import React, { Component } from 'react';
import logo from './logo.svg';
import Splash from './components/Splash';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Splash logo={logo} />
        </header>
      </div>
    );
  }
}

export default App;
