import React from 'react';
import { ReactComponent as SnowFlake } from '../assets/snowflake-1.svg';

const random = (number) => Math.floor((Math.random() * number) + 20);

class Card extends React.Component {
  state = {
    draw: false,
    list: []
  }

  openCard = (number) => {
    const {names, onUpdateCalendar} = this.props;

    const randomNumber = Math.floor((Math.random() * names.length) * 1000)  ;
    const liste = [...names];

    this.setState({
      draw: true,
    })

    // animate name selection
    const spinn = setInterval(() => {
      liste.unshift(liste.pop())
      this.setState({
        list: liste
      })
    }, 100)

    setTimeout(()=> {
      clearInterval(spinn);
      
      setTimeout(() => {
        this.setState({
          draw: false
        })
        onUpdateCalendar(number, liste[1]);
      }, 2000);
    }, randomNumber);
  }

  render() {
    const { number, name } = this.props;
    const { draw, list } = this.state;

    return(
      <div className={`card__wrap`}>
        <div className={`card ${name ? 'card--open' : ''}`}>
          <div className="card__face card__front">
            <div className="card__face card__inner">
              <span className="snowflake" style={{
                top: `${random(160)}px`,
                right: `${random(160)}px`,
                maxWidth: `${random(60)}px`
              }}>
                <SnowFlake style={{fill: 'white'}} />
              </span>
              {number}
            </div> 
          </div>
          <div className="card__face card__back">
            {name}
            {!name && !draw && <button onClick={() => this.openCard(number)} className="card__button">Åpne luke</button> }
            <div className={`name-list ${draw ? 'name-list--show':''}`}>
              {list.map(name => <div key={name} className="name-list__name">{name}</div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Card;
