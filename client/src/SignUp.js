import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel, FormControl, Button, Col,Form, Checkbox } from "react-bootstrap";

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
        <h1>
          Register
        </h1>

      <Form  horizontal onSubmit={this.handleSubmit.bind(this)}>
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
                placeholder="email@email.com"
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
              <Button type="submit">Sign Up</Button>
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
