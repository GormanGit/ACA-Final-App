import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Row, Col, Alert } from "react-bootstrap";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


class SignUpSignIn extends Component {

  renderError() {
    return (
      <Alert bsStyle="danger">
        <strong>{this.props.error}</strong>
      </Alert>
    );
  }

  render() {
    return (
      <Row id="list" >
        <Col xs={8} xsOffset={2}>
          {this.props.error && this.renderError()}
          <Tabs   defaultActiveKey={1} id="signup-signin-tabs">
            <Tab   eventKey={1} title="Sign In">
              <SignIn onSignIn={this.props.onSignIn} />
            </Tab>
            <Tab eventKey={2} title="Sign Up">
              <SignUp onSignUp={this.props.onSignUp} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
}

SignUpSignIn.propTypes = {
  error: PropTypes.string,
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,

};

export default SignUpSignIn;
