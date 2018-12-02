import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Card extends React.Component {
  state = {
    draw: false,
    list: []
  }

  openCard = (number) => {
    const {names, onUpdateCalendar} = this.props;

    const randomNumber = Math.floor((Math.random() * names.length) * 500)  ;
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
    }, 60)

    setTimeout(()=> {
      clearInterval(spinn);
      onUpdateCalendar(number, liste[1]);
    }, randomNumber);
  }

  render() {
    const { number, name } = this.props;
    const { draw, list } = this.state;

    return(
      <div className={`card__wrap`}>
        <div className={`card ${name || draw ? 'card--open' : ''}`}>
          <div className="card__face card__front">
            <div className="card__face card__inner">
              {number}
            </div> 
          </div>
          <div className="card__face card__back">
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {name && (<p>{name}</p>)}
            </CSSTransitionGroup>

            {!draw && !name && <button onClick={() => this.openCard(number)} className="card__button">Åpne luke</button> }
            
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={0}>
              {draw && !name && (
                <div key="example" className="name-list">
                  {list.map(name => <div key={name} className="name-list__name">{name}</div>)}
                </div>
              )}
            </CSSTransitionGroup>
            
          </div>
        </div>
      </div>
    );
  }
}


export default Card;
