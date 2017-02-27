import React from 'react';

import ListTodos from './ListTodos.jsx';
import SearchTodo from './SearchTodo.jsx';

import todos from '../../services/todos.js'

export default class TodoWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    }

    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(value) {
    this.setState({
      filter: value
    })
  }

  render() {
    const filterredTodos = todos.filter((todo) => {
      let title = todo.title.toLowerCase();
      let filterText = this.state.filter.toLowerCase();

      if (title.indexOf(filterText) > -1) {
        return true;
      }

      return false;
    })

    return (
      <div>
        <SearchTodo updateFilter={this.updateFilter} />
        <ListTodos todos={filterredTodos} />
      </div>
    )
  }
}
