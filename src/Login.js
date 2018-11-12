import React, { Component } from 'react';

class Login extends Component {

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(isAuthenticated());
    if (!isAuthenticated()) this.props.auth.login();
    return (
      <div>
        Looks like you're already logged in.
      </div>
    );
  }
}

export default Login;
