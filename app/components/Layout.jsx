import React from 'react';
import reactCSS from 'reactcss';
import { Link } from 'react-router';

const styles = reactCSS({
  'default': {
    container: {
      width: '80%',
      minHeight: '300px',
      margin: '0 auto'
    },
    sidebar: {
      width: '30%'
    },
    sidebarUl: {
      listStyle: 'none'
    },
    content: {
      width: '70%'
    }
  }
})

export default class Layout extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <ul style={styles.sidebarUl}>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/todos">Todos</Link></li>
          </ul>
        </div>
        <div style={styles.content}>
          { this.props.children }
        </div>
      </div>
    )
  }
}
