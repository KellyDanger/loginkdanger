import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Login.css';

class Login extends Component {
  state = {
    register: true,
    login: false,
  }

  render() {
    return (
      <>
      {this.state.register &&
        <div className="loginForm">
          <Button
            className="loginRegActive"
            variant="primary"
          >Register</Button>
          <Button
            className="loginRegInactive"
            variant="primary"
          >Login</Button>
          <h2>Sign Up for Free</h2>
        </div>
      }
      </>
    )
  }
};

export default Login;