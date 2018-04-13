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
        <h2 id="list" >
          Welcome
          <br/>
          To
          <br/>
          <h1 id="signUpSignIn" style={{color:"black"}}>
            There's Nothing to Eat &copy;
          </h1>
        </h2>

        <br/>

      <Form id="listSignIn" horizontal onSubmit={this.handleSubmit.bind(this)}>
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
        <div id="listSignIn">
          Not registered?
          <br/>
          Just navigate to the Sign Up tab to begin.
        </div>

        <br/>
        <FormGroup>
          <Col smOffset={4} sm={4}>
            <Button id="signUpSignIn" type="submit">Sign In</Button>
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






