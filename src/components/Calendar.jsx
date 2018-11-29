import React from 'react';
import Card from './Card';
class Calendar extends React.Component {
  state = {
    dates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,24],
    nameDateMap: {}
  };

  render() {
    const { openDates, onClickHandler, notChristmas } = this.props;
    return (
      <main className="calendar">
        {this.state.dates.map((date, i) => (
          <div className="card__wrap">
            <Card 
            key={`date-${i}`} 
            number={date}
            name={openDates[date]}
            notChristmas={notChristmas}
            onClick={onClickHandler}/>
          </div>
        ))}
      </main>
    );
  }
}
export default Calendar;
