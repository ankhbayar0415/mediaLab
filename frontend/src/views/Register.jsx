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
      error: null,
      toDashboard: false,
    };
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/"></Redirect>;
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
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  {this.state.error && (
                    <div className="validation">
                      <Warning className="ic" />
                      &nbsp;
                      <div className="val">{this.state.error}</div>
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

  handleSubmit = (e) => {
    e.preventDefault();

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
          error: false,
          toDashboard: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: err,
        });
      });
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
}
