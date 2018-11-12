import React, { Component } from 'react';
import Auth from './auth';
import logo from './logo.svg';
import './App.css';

const auth = new Auth();

class App extends Component {

  componentDidMount() {
    console.log('component mounted');
    auth.login();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
