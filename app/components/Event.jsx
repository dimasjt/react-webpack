import React from 'react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    eventCard: {
      width: '100%',
      padding: '12px',
      background: '#eeeeee',
      margin: '10px',
      borderRadius: '5px'
    },
    title: {
      padding: 0,
      margin: 0
    }
  }
})

class Event extends React.Component {
  render() {
    const event = this.props.event;

    return (
      <div style={ styles.eventCard }>
        <h3 style={ styles.title }>{ event.name }</h3>
        <div>
          <span>{ event.status }</span>
          <span>{ event.start }</span>
          <span>{ event.end }</span>
        </div>
        <p>{ event.description }</p>
      </div>
    );
  }
}

Event.propTypes = {
  event: React.PropTypes.object
}

export default Event;
