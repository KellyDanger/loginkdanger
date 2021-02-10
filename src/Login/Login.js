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
          {/* this is the login/register button row */}
            <Row>
              <Col>
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
              </Col>
            </Row>
            {/* end login/register row */}
            {/* headline row */}
            <Row>
                <h2>Sign Up for Free.</h2>
            </Row>
            {/* end headline row */}
            {/* name input row */}
            <Row>
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
              <Col>
                  <input
                    className="regFormInput"
                    type="text"
                    placeholder="Email Address"
                  >
                  </input>
              </Col>
            </Row>
            {/* end email input row */}
            {/* password input row */}
            <Row>
              <Col sm>
                  <input
                    className="regFormInput"
                    type="password"
                    placeholder="Set a Password"
                  >
                  </input>
              </Col>
            </Row>
            {/* end password input row */}
            {/* go button row */}
            <Row>
              <Col sm>
                <Button
                  id="getStartedBtn"
                  variant="primary"
                  onClick={() => this.submit()}
                >
                  GET STARTED
                </Button>
              </Col>
            </Row>
            {/* end go button row */}
        </Container>
      }
      </>
    )
  }
};

export default Login;