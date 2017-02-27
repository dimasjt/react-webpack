import React from 'react';

import ListTodos from './ListTodos.jsx';
import SearchTodo from './SearchTodo.jsx';

export default class TodoWrapper extends React.Component {
  render() {
    return (
      <div>
        <SearchTodo />
        <ListTodos />
      </div>
    )
  }
}
