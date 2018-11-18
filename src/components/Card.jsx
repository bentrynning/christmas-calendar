import React from 'react';

const Card = ({ number, name, open }) => (
  <div className={`card ${name ? 'card--open' : ''}`}>
    <div className="card__face card__front">
      <div className="card__face card__inner">
        {number}
      </div> 
    </div>
    <div className="card__face card__back">{name}</div>
  </div>
);

export default Card;
