import React from 'react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    textField: {
      padding: "7px 9px",
      borderRadius: "4px",
      border: '1px solid #cccccc',
      fontSize: '16px',
      minWidth: '50%'
    }
  }
})

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
          <input style={styles.textField} type="text" placeholder="Search here..." onChange={this.handleFilter} />
        </form>
      </div>
    )
  }
}

SearchTodo.propTypes = {
  todos: React.PropTypes.array,
  updateFilter: React.PropTypes.func
}
