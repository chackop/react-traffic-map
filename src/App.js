import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduction />
      </div>
    );
  }
}

export default App;
