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
      width: '30%',
      display: 'inline-block',
      verticalAlign: 'top'
    },
    sidebarUl: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      paddingRight: 20
    },
    sidebarLi: {
      display: 'block',
      position: 'relative',
      width: '100%',
      borderBottom: '1px solid #dddddd'
    },
    sidebarLink: {
      color: '#ffffff',
      padding: '10px',
      backgroundColor: '#cccccc',
      display: 'block',
      textDecoration: 'none'
    },
    content: {
      width: '70%',
      display: 'inline-block'
    }
  }
})

export default class Layout extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <ul style={styles.sidebarUl}>
            <li style={styles.sidebarLi}>
              <Link style={styles.sidebarLink} to="/events">Events</Link>
            </li>
            <li style={styles.sidebarLi}>
              <Link style={styles.sidebarLink} to="/todos">Todos</Link>
            </li>
          </ul>
        </div>
        <div style={styles.content}>
          { this.props.children }
        </div>
      </div>
    )
  }
}
