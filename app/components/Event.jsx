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
        <h3 style={ styles.title }>{ event.name.text }</h3>
        <div>
          <span>{ event.status }</span>
        </div>
        <p>{ event.description.text }</p>
      </div>
    );
  }
}

Event.propTypes = {
  event: React.PropTypes.shape({
    start: React.PropTypes.object,
    end: React.PropTypes.object,
    name: React.PropTypes.object,
    description: React.PropTypes.object,
    logo: React.PropTypes.object
  })
}

export default Event;
