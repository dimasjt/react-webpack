import React from 'react';

export default class SearchTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    var filter = event.target.value;

    this.props.updateFilter(filter);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search here..." onChange={this.handleFilter} />
        </form>
      </div>
    )
  }
}

SearchTodo.propTypes = {
  todos: React.PropTypes.array,
  updateFilter: React.PropTypes.func
}
