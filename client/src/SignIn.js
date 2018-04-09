import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel, FormControl, Button, Col, Form, Checkbox } from "react-bootstrap";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",

    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignIn({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Sign In
        </h1>
      <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
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
        <FormGroup>
          <Col smOffset={4} sm={4}>
            <Button type="submit">Sign In</Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired
};

export default SignIn;






