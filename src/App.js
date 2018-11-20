import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Calendar from './components/Calendar';
import Canvas from './components/Canvas';
import './App.css';
import config from './config.json';

firebase.initializeApp(config);

const firestore = firebase.firestore();
const datesDocRef = firestore.doc('calendar/dates');
const usersDocRef = firestore.doc('calendar/users');

class App extends Component {
  state = {
    names: ['bent', 'Håkon', 'Jon', 'Mira', 'Martin', 'Lorita', 'Thomas', 'Julij', 'Anders', 'Evind', 'Emil', 'Eli', 'Kristin', 'Marcus', 'Thin', 'Sigurd', 'Fredrik'],
    openDates: {}
  }

  async componentWillMount() {
    datesDocRef.onSnapshot((datesDoc) => {
      if(datesDoc && datesDoc.exists) {
        this.setState({
          openDates: datesDoc.data()
        })
       }
    });
  }

  openCurrentDate = () => {
    const doDaysDate = new Date().getDate();
    const selectedNumber = Math.floor(Math.random() * (this.state.names.length + 1)) ;
    const doDaysName = this.state.names[selectedNumber];
    datesDocRef.set({
      ...this.state.openDates,
      [doDaysDate]: doDaysName
    })
    .then(() => console.log('Save complete'))
    .catch(error => console.log(`Save faild: ${error}`))
  }

  render() {
    // const openDates = this.state.names.reduce((acc, name, i) => ({...acc, [i]:name}))
    const { openDates } = this.state;
    return (
      <div className="app">
        <header className="header">
          <div className="header__content">        
            <h1>Serviceteam julekalender</h1>
            <button onClick={this.openCurrentDate} className="btn">Åpne luke</button>
          </div>
        </header>
        <Canvas />
        <Calendar openDates={openDates}/>
      </div>
    );
  }
}
export default App;
