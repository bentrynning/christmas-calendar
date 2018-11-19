import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Canvas from './components/Canvas';
import './App.css';

class App extends Component {
  state = {
    names: ['Bent', 'Håkon', 'Jon', 'Mira', 'Martin', 'Lorita', 'Thomas', 'Julij', 'Anders', 'Evind', 'Emil', 'Eli', 'Kristin', 'Marcus', 'Thin', 'Sigurd', 'Fredrik']
  }
  openCurrentDate = () => {
    
  }

  render() {
    const openDates = this.state.names.reduce((acc, name, i) => ({...acc, [i]:name}))

    return (
      <div className="app">
        <header className="header">
          <div className="header__content">        
            <h1>Serviceteam julekalender</h1>
            <button className="btn">Åpne luke</button>
          </div>
        </header>
        <Canvas />
        <Calendar openDates={openDates}/>
      </div>
    );
  }
}
export default App;
