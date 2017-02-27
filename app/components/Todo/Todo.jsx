import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      <li>
        <h3>{ this.props.todo.title }</h3>
      </li>
    )
  }
}

Todo.propTypes = {
  todo: React.PropTypes.object
}
