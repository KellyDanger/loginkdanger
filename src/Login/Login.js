import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Login.css';

class Login extends Component {
  state = {
    register: true,
    login: false,
  };
  toggleReg = () => {
    console.log('REGISTER');
  };
  toggleLogin = () => {
    console.log('LOGIN');
  }
  submit = () => {
    console.log('SUBMIT');
  }

  render() {
    return (
      <>
      {this.state.register &&
        <div className="loginRegForm">
          <Button
            className="active"
            id="registerBtn"
            variant="secondary"
            onClick={() => this.toggleReg()}
            disabled
          >Register</Button>
          <Button
            className="inactive"
            id="loginBtn"
            variant="secondary"
            onClick={() => this.toggleLogin()}
          >Login</Button>
          <h2>Sign Up for Free</h2>
          <div className="inputs">
          <div>
            <input
              className="regFormInput"
              id="firstName"
              type="text"
              placeholder="First Name"
            >
            </input>
            <input
              className="regFormInput"
              id="lastName"
              type="text"
              placeholder="Last Name"
            >
            </input>
          </div>
          <div>
            <input
              className="regFormInput"
              id="email"
              type="text"
              placeholder="Email Address"
            >
            </input>
          </div>
          <div>
            <input
              className="regFormInput"
              id="password"
              type="password"
              placeholder="Set a Password"
            >
            </input>
          </div>
          </div>
          <Button
            className="goBtn"
            className="active"
            id="getStartedBtn"
            variant="primary"
            onClick={() => this.submit()}
          >
            Get Started
          </Button>
        </div>
      }
      </>
    )
  }
};

export default Login;