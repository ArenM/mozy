import React, { Component } from 'react';
import './App.css';

class App extends Component {
  d = "a"
  componentDidMount() {
    console.log("App Mounted")
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.d}
        </header>
      </div>
    );
  }
}

export default App;
