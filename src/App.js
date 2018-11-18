import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Canvas from './components/Canvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Serviceteam julekalender</h1>
        </header>
        <Canvas />
        <Calendar />
      </div>
    );
  }
}
export default App;
