import React from 'react';
import { ReactComponent as SnowFlake } from '../assets/snowflake-1.svg';
const random = (number) => Math.floor((Math.random() * number) + 20);

const Card = ({ number, name, onClick, notChristmas }) => (
  <div 
    className={`card ${name ? 'card--open' : ''}`}
  >
    <div className="card__face card__front">
      <span className="snowflake" style={{
        top: `${random(160)}px`,
        right: `${random(160)}px`,
        maxWidth: `${random(60)}px`,
        opacity: '0.8'
      }}>
        <SnowFlake style={{fill: 'white'}} />
      </span>
      <div className="card__face card__inner">
        {number}
      </div> 
    </div>
    <div className="card__face card__back">
      {name}
      {!name && !notChristmas && <button onClick={() => onClick(number)} className="card__button">Åpne luke</button> }
      {notChristmas && 'Ikke Jul riktig enda!!'}
    </div>
  </div>
);

export default Card;
