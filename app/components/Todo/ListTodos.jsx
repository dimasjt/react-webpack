import React from 'react';

import Todo from './Todo.jsx';

export default class ListTodos extends React.Component {
  render() {
    const todos = this.props.todos.map((todo) => {
      return <Todo todo={todo} key={todo.id} />
    })

    return (
      <ul>
        { todos }
      </ul>
    )
  }
}
