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
          <h1>Anthropolocast</h1>
        </header>
      </div>
    );
  }
}

export default App;
