import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="pure-g Login">
        <div className="pure-u-1">
          <p>
            Hey, we don't recognize you!<br />
            <a href>Create an account</a> or <a href>login</a>
          </p>
          <p>
            Welcome back, <em>Ben</em>!<br />
          <a href>Login</a> or <a href>that's not me</a>
          </p>
        </div>
        <div className="pure-u-md-1-6"></div>

      </div>
    );
  }
}

export default Login;
