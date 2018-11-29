import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Calendar from './components/Calendar';
import Canvas from './components/Canvas';
import './App.css';
import config from './config.json';

firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots: true});

const datesDocRef = firestore.doc('calendar/dates');
const usersDocRef = firestore.doc('calendar/users');

class App extends Component {
  state = {
    names: [],
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
    usersDocRef.get().then((userDoc) => {
      if(userDoc && userDoc.exists) {
        const selectedNames = Object.values(this.state.openDates).map(name => name);
        const names = userDoc.data().names.filter(name => selectedNames.indexOf(name) === -1)
        this.setState({names: names});
       }
    });
  }

  openCard = (number) => {
    const currentDate = new Date().getDate();
    const month = new Date().getMonth();
    if(month < 12) {
      this.setState({
        notChristmas: true
      })
      return
    }
    if(number <= currentDate) {
      const randomNumber = Math.floor(Math.random() * this.state.names.length) ;
      const selectedName = this.state.names[randomNumber];
      datesDocRef.set({
        ...this.state.openDates,
        [number]: selectedName
      })
      .then(() => console.log('Save dates complete'))
      .catch(error => console.log(`Save dates faild: ${error}`))
      const filteredNames = this.state.names.filter(name => name !== selectedName);
      this.setState({names: filteredNames})
    }
    
  }

  render() {
    const { openDates, notChristmas } = this.state;
    return (
      <div className="app">
        <header className="header">
          <div className="header__content">        
            <h1>Serviceteam julekalender</h1>
          </div>
        </header>
        <Canvas />
        <Calendar 
          notChristmas={notChristmas}
          openDates={openDates}
          onClickHandler={this.openCard}/>
      </div>
    );
  }
}
export default App;
