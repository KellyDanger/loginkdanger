import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        <Container className="loginRegForm">
          <Col lg={12}>
          {/* this is the login/register button row */}
            <Row>
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
            </Row>
            {/* end login/register row */}
            {/* headline row */}
            <Row>
              <h2>Sign Up for Free.</h2>
            </Row>
            {/* end headline row */}
            {/* name input row */}
            <Row className="nameInputs">
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
            </Row>
            {/* end name input row */}
            {/* email input row */}
            <Row> 
                  <input
                    className="regFormInput"
                    id="email"
                    type="text"
                    placeholder="Email Address"
                  >
                  </input>
            </Row>
            {/* end email input row */}
            {/* password input row */}
            <Row>
                  <input
                    className="regFormInput"
                    id="password"
                    type="password"
                    placeholder="Set a Password"
                  >
                  </input>
            </Row>
            {/* end password input row */}
            {/* go button row */}
            <Row>
              <Button
                id="getStartedBtn"
                variant="primary"
                onClick={() => this.submit()}
              >
                GET STARTED
              </Button>
            </Row>
            {/* end go button row */}
          </Col>
        </Container>
      }
      </>
    )
  }
};

export default Login;