import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login To FireBase</h1>
        <div>
          <input type="text" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
        </div>
      </div>
    )
  }
}
