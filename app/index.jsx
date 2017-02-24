import React from 'react';
import { render } from 'react-dom';
import reactCSS from 'reactcss';

import Event from './components/Event.jsx';
import Service from './services/service.js';

const styles = reactCSS({
  'default': {
    container: {
      width: '500px',
      minHeight: '300px',
      padding: '18px',
      margin: '0 auto'
    }
  }
})

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    Service.events.search().then((response) => {
      this.setState({ events: response.data.events })
    })
  }

  render() {
    var events = [];

    this.state.events.forEach((event, index) => {
      events.push(<Event event={event} key={event.id} />)
    })

    return (
      <div style={ styles.container }>
        { events }
      </div>
    );
  }
}

const EVENTS = [
  { name: 'Ruby on Rails meetup Bandung', description: 'Lorem ipsum', capacity: 3, status: 'started' },
  { name: 'ReacJS meetup Jakarta', description: 'Lorem ipsum too', capacity: 3, status: 'started' }
]

render(<App events={EVENTS} />, document.getElementById('app'))
