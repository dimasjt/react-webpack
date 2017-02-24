import React from 'react';
import reactCSS from 'reactcss';

import Event from './Event.jsx';
import Service from './../services/service.js';

import eventStyles from './../css/events.js';

class ListEvents extends React.Component {
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
      <div style={ eventStyles.eventWrapper }>
        { events }
      </div>
    );
  }
}

export default ListEvents;
