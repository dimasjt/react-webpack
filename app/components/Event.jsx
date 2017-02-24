import React from 'react';

class Event extends React.Component {
  render() {
    const event = this.props.event;

    return (
      <div>
        <h3>{ event.title }</h3>
      </div>
    );
  }
}

Event.propTypes = {
  event: React.PropTypes.object
}

export default Event;
