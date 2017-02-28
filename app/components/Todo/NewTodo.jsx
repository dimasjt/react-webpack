import React from 'react';

export default class NewTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewTodo = this.handleNewTodo.bind(this)
  }

  handleNewTodo(event) {
    event.preventDefault();

    if (event.keyCode === 13) {
      this.props.addTodo(event.target.value)
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="input new todo..." onKeyUp={this.handleNewTodo} />
      </div>
    )
  }
}
