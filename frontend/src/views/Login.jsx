import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import Auth from "../utils/AuthHelper";
import "../styles/SignIn.scss";

import logo from "../images/logo.png";
import Banner from "../images/banner.png";
import { ReactComponent as Warning } from "../images/warning.svg";

const auth = new Auth();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      sqlerror: null,
      toDashboard: false,
    };
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/index"></Redirect>;
    } else {
      return (
        <div className="login">
          <div className="loginContainer">
            <img className="banner" src={Banner} alt="banner" />
            <div className="signinContainer">
              <div className="signinMenu">
                <img className="logo" src={logo} alt="logo" />
                <div className="signInForm">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errors.username}</div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errors.password}</div>
                  {this.state.sqlerror && (
                    <div className="validation">
                      <Warning />
                      &nbsp;&nbsp;
                      {this.state.sqlerror}
                    </div>
                  )}
                  <button className="loginButton" onClick={this.handleSubmit}>
                    Log In
                  </button>
                  <div className="forgotPassword">
                    <span>Forgot your password?</span>
                  </div>
                </div>
              </div>
              <div className="signIn">
                <div className="signInText">
                  Don't have an account?{" "}
                  <Link className="link" to="/signup">
                    Sign Up
                  </Link>
                </div>
              </div>
              <div className="copyright">
                <span>Made by Ankhbayar Enkhlkhagva 2022</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      auth
        .login(this.state.username, this.state.password)
        .then((token) => {
          console.log(token);
          this.setState({
            sqlerror: false,
            toDashboard: true,
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            sqlerror: err,
          });
        });
    }
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  validateForm() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.username) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
}
