import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel, FormControl, Button, Col,Form, Checkbox } from "react-bootstrap";
import "./App.css"

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp({
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
  }

  render() {
    return (
      <div>
        <h2 id="list">
          Get Registered
          <br/>
          For
          <br/>
          <h1 id="signUpSignIn" style={{color:"black"}}>
            There's Nothing to Eat &copy;
          </h1>
        </h2>
        <br/>

      <Form  id="listSignIn" horizontal onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup  controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={4}>
            </Col>
             <Col sm={4}>
              <FormControl
                type="email"
                name="username"
                onChange={e => {
                  this.setState({[e.target.name]: e.target.value});
                }}
                placeholder="email@foody.com"
                value={this.state.username} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={4}>

            </Col>
            <Col sm={4}>
              <FormControl
                type="password"
                name="password"
                onChange={e => {
                  this.setState({[e.target.name]: e.target.value});
                }}
                placeholder="Password"
                value={this.state.password}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={4}>

            </Col>
            <Col sm={4}>
              <FormControl
                type="password"
                name="confirmPassword"
                onChange={e => {
                  this.setState({[e.target.name]: e.target.value});
                }}
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={4} sm={4}>
              <Button id="signUpSignIn" type="submit">Sign Up</Button>
            </Col>
          </FormGroup>
      </Form>
      </div>
    );
  }
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default SignUp;
