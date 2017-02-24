import React from 'react';
import { render } from 'react-dom';

import Event from './components/Event.jsx';

class App extends React.Component {
  render() {
    var events = [];

    this.props.events.forEach((event) => {
      events.push(<Event event={event} />)
    })

    return (
      <div>
        { events }
      </div>
    );
  }
}

const EVENTS = [
  { title: 'Ruby on Rails meetup Bandung' },
  { title: 'ReacJS meetup Jakarta' }
]

render(<App events={EVENTS} />, document.getElementById('app'))
