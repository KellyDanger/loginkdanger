import React, { Component } from 'react';
import { Button, Form, Row, Col, FormControl, ButtonGroup } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
  state = {
    register: true,
    login: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    fnErr: false,
    lnErr: false,
    emailErr: false,
    passErr: false,
    formValid: true,
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
  };
  handleChange = (event, param) => {
    this.setState({
      [param]: event.target.value
    })
  };
  handleValidation = () => {
    if(!this.state.firstName) {
      this.setState({
        fnErr: true,
      })
    }
    if(!this.state.lastName) {
      this.setState({
        lnErr: true,
      })
    }
    if(!this.state.email) {
      this.setState({
        emailErr: true,
      })
    }
    if(!this.state.password) {
      this.setState({
        passErr: true,
      })
    }
  };
  submit = (event) => {
    event.preventDefault();
    this.handleValidation();
    console.log('Submit', this.state);
  };
  render() {
    return (
      <>
        <Form className="loginRegForm" onSubmit={this.submit} noValidate>
          {/* this is the login/register button row */}
          {/* conditionally renders buttons to show reg or login as active */}
            <Row>
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
            {/* headline row conditionally renders to show appropriate greeting for chosen form */}
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
                {/* firstName conditionally renders on submit if the field is empty */}
                {this.state.fnErr ?
                  <FormControl
                    className="regFormInput"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    required
                    onChange={(event) => this.handleChange(event, "firstName")}
                  >
                  </FormControl>
                  :
                  <FormControl
                    className="regFormInput"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={(event) => this.handleChange(event, "firstName")}
                  >
                  </FormControl>
                }
                {/* lastName conditionally renders on submit if the field is empty */}
                {this.state.lnErr ?
                  <FormControl
                    className="regFormInput"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    required
                    onChange={(event) => this.handleChange(event, "lastName")}
                  >
                  </FormControl>
                  :
                  <FormControl
                    className="regFormInput"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={(event) => this.handleChange(event, "lastName")}
                  >
                  </FormControl>
                
                }
              </Row>
            }
            {/* end name input row */}
            {/* email input row conditionally renders on submit if field is empty */}
            <Row> 
              <Col>
              {this.state.emailErr ?
                <FormControl
                  className="regFormInput"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  required
                  onChange={(event) => this.handleChange(event, "email")}
                >
                </FormControl>
                :
                <FormControl
                  className="regFormInput"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event, "email")}
                >
                </FormControl>
              }
              </Col>
            </Row>
            {/* end email input row */}
            {/* password input row  conditionally renders on submit if field is empty*/}
            <Row>
              <Col>
              {this.state.passErr ?
                <FormControl
                  className="regFormInput"
                  id="password"
                  type="password"
                  placeholder="Set a Password"
                  value={this.state.password}
                  required
                  onChange={(event) => this.handleChange(event, "password")}
                >
                </FormControl>
                :
                <FormControl
                className="regFormInput"
                id="password"
                type="password"
                placeholder="Set a Password"
                value={this.state.password}
                onChange={(event) => this.handleChange(event, "password")}
              >
              </FormControl>
              }
              </Col>
            </Row>
            {/* end password input row */}
            {/* go button row conditionally renders for each form */}
            <Row>
              <Col sm>
              {this.state.register ?
                <Button
                  id="getStartedBtn"
                  variant="primary"
                  type="submit"
                >
                  GET STARTED
                </Button>
                :
                <Button
                  id="getStartedBtn"
                  variant="primary"
                  type="submit"
                >
                  LOG IN
                </Button>
              }
              </Col>
            </Row>
            {/* end go button row */}
        </Form>
      </>
    )
  }
};

export default Login;