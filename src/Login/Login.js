import React, { Component } from 'react';
import { Button, FormGroup, Row, Col, FormControl, ButtonGroup } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
  state = {
    register: true,
    login: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    validated: false,
  };
  toggleReg = () => {
    console.log('REGISTER');
    this.setState({
      register: true,
      login: false,
    })
  };
  toggleLogin = () => {
    console.log('LOGIN');
    this.setState({
      register: false,
      login: true,
    })
  }
  handleChange = (event, param) => {
    this.setState({
      [param]: event.target.value
    })
  }

  submit = () => {
    console.log('SUBMIT', this.state);
  }

  render() {
    return (
      <>
        <FormGroup className="loginRegForm">
          {/* this is the login/register button row */}
            <Row>
            {JSON.stringify(this.state.validated)}
              {this.state.register ?
              <ButtonGroup>
                <Button
                  className="active"
                  id="registerBtn"
                  variant="secondary"
                  onClick={() => this.toggleReg()}
                >Register</Button>
                <Button
                  className="inactive"
                  id="loginBtn"
                  variant="secondary"
                  onClick={() => this.toggleLogin()}
                >Login</Button>
              </ButtonGroup>
              :
              <ButtonGroup>
                <Button
                className="inactive"
                id="registerBtn"
                variant="secondary"
                onClick={() => this.toggleReg()}
              >Register</Button>
              <Button
                className="active"
                id="loginBtn"
                variant="secondary"
                onClick={() => this.toggleLogin()}
              >Login</Button>
              </ButtonGroup>
              }
            </Row>
            {/* end login/register row */}
            {/* headline row */}
            {this.state.register ?
              <Row>
                <h2>Sign Up for Free.</h2>
              </Row>
              :
              <Row>
                <h2>Welcome Back!</h2>
              </Row>   
            }
            {/* end headline row */}
            {/* name input row */}
            {this.state.register &&
              <Row>
                  <FormControl
                    className="regFormInput"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={(event) => this.handleChange(event, "firstName")}
                  >
                  </FormControl>
                  <FormControl
                    className="regFormInput"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    onChange={(event) => this.handleChange(event, "lastName")}
                  >
                  </FormControl>
              </Row>
            }
            {/* end name input row */}
            {/* email input row */}
            <Row> 
              <Col>
                  <FormControl
                    className="regFormInput"
                    id="email"
                    type="text"
                    placeholder="Email Address"
                    required
                    onChange={(event) => this.handleChange(event, "email")}
                  >
                  </FormControl>
              </Col>
            </Row>
            {/* end email input row */}
            {/* password input row */}
            <Row>
              <Col sm>
                  <FormControl
                    className="regFormInput"
                    id="password"
                    type="password"
                    placeholder="Set a Password"
                    required
                    onChange={(event) => this.handleChange(event, "password")}
                  >
                  </FormControl>
              </Col>
            </Row>
            {/* end password input row */}
            {/* go button row */}
            <Row>
              <Col sm>
              {this.state.register ?
                <Button
                  id="getStartedBtn"
                  variant="primary"
                  // type="submit"
                  onClick={() => this.submit()}
                >
                  GET STARTED
                </Button>
                :
                <Button
                  id="getStartedBtn"
                  variant="primary"
                  // type="submit"
                  onClick={() => this.submit()}
                >
                  LOG IN
                </Button>
              }
              </Col>
            </Row>
            {/* end go button row */}
        </FormGroup>
      </>
    )
  }
};

export default Login;