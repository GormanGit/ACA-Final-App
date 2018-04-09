import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpSignIn from "./SignUpSignIn";
import TopNavbar from "./TopNavbar";
import Secret from "./Secret";
import SecuredClass1 from "./SecuredClass1";
import SecuredClass2 from "./SecuredClass2";
import SecuredClass3 from "./SecuredClass3";
import App1 from "./components/App1";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signUpSignInError: "",
      authenticated: localStorage.getItem("token") || false
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);

  }
  handleSignIn(credentials) {
    // **
    const { username, password } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {

      fetch("/sessions", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        if (res.status === 401 ){
          return this.setState({
            signUpSignInError: "Invalid Login"
          });
        }
        return res.json();
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    }
  }

  handleSignUp(credentials) {
    const { username, password, confirmPassword } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {
      if (password !== confirmPassword) {
        this.setState({
          signUpSignInError: "Passwords need to match"
        });
      }
      fetch("/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        if (res.status === 422) {
          console.log("Username is already in use")
          this.setState({
            SignUpSignInError: "Username is already in use"
          });
        } else {
          return res.json();
        }
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    }
  }




  handleSignOut() {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }

  renderSignUpSignIn() {
    return (
      <SignUpSignIn
        onSignIn={this.handleSignIn}
        onSignUp={this.handleSignUp}
        error={this.state.signUpSignInError}

      />
    );
  }

  renderApp() {
    return (
      <div>
        <Switch>
          {/*<Route exact path="/" render={() => <h1>I am protected!</h1>} />*/}
          <Route exact path="/" component={App1} />
          <Route exact path="/secret" component={Secret} />
          <Route exact path="/SecuredClass1" component={SecuredClass1} />
          <Route exact path="/SecuredClass2" component={SecuredClass2} />
          <Route exact path="/SecuredClass3" component={SecuredClass3} />
          <Route render={() => <h1>NOT FOUND!</h1>} />
        </Switch>
      </div>
    );
  }

  render() {
    let whatToShow = "";
    if (this.state.authenticated) {
      whatToShow = this.renderApp();
    } else {
      whatToShow = this.renderSignUpSignIn();
    }
       
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavbar 
            showNavItems={this.state.authenticated} 
            onSignOut={this.handleSignOut} />
          {whatToShow}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
