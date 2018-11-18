import React from 'react';
import Card from './Card';
class Calendar extends React.Component {
  state = {
    names: ['boob', 'boo', 'baab'],
    dates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,24],
    nameDateMap: {}
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        nameDateMap: {
          1: 'boob',
          2: 'boo',
          3: 'baab',
          4: 'Bent',
          5: 'Bård',
          6: 'Foo'
        }
      })
    }, 100)
  }

  render() {
    return (
      <main className="calendar">
        {this.state.dates.map((date, i) => (
          <Card key={`date-${i}`} number={date} name={this.state.nameDateMap[date]}/>
        ))}
      </main>
    );
  }
}
export default Calendar;
