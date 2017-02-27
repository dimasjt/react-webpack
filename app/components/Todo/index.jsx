import React from 'react';

import ListTodos from './ListTodos.jsx';
import SearchTodo from './SearchTodo.jsx';

import todos from '../../services/todos.js'

export default class TodoWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todos
    }
  }

  // componentWillMount() {
  //
  // }

  render() {
    return (
      <div>
        <SearchTodo todos={this.state.todos} />
        <ListTodos todos={this.state.todos} />
      </div>
    )
  }
}
