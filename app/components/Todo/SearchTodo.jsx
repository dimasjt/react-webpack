import React from 'react';

export default class SearchTodo extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search here..." />
        </form>
      </div>
    )
  }
}
