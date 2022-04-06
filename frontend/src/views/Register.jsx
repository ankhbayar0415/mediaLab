import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import Auth from "../utils/AuthHelper";
import "../styles/SignUp.scss";

import logo from "../images/logo.png";
import Banner from "../images/banner.png";
import { ReactComponent as Warning } from "../images/warning.svg";

const auth = new Auth();

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      fullname: "",
      errors: {},
      sqlError: null,
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
            <div className="listSignUp">
              <div className="signUpMenu">
                <img className="logo" src={logo} alt="logo" />
                <div className="descContainer">
                  <div className="descText">
                    Sign Up to see photos and videos from your friends
                  </div>
                </div>
                <div className="signUpForm">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errors.email}</div>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errors.fullname}</div>
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
                  {this.state.sqlError && (
                    <div className="validation">
                      <Warning className="ic" />
                      &nbsp;
                      <div className="val">{this.state.sqlError}</div>
                    </div>
                  )}
                  <button className="signupButton" onClick={this.handleSubmit}>
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="signUp">
                <span className="signUpText">
                  Have an account?{" "}
                  <Link className="link" to="/signin">
                    Sign In
                  </Link>
                </span>
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

  // Register user and update Context
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      auth
        .register(
          this.state.username,
          this.state.email,
          this.state.password,
          this.state.fullname
        )
        .then((token) => {
          console.log(token);
          this.setState({
            sqlerror: false,
            toDashboard: true,
          });
        })
        .catch((err) => {
          // Show errors sent by api
          console.log(err);
          this.setState({
            sqlError: err,
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

    if (typeof this.state.username !== "undefined") {
      if (!this.state.username.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof this.state.email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(this.state.email)) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!this.state.fullname) {
      formIsValid = false;
      errors["fullname"] = "*Please enter your full name.";
    }

    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof this.state.password !== "undefined") {
      if (
        !this.state.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
}
