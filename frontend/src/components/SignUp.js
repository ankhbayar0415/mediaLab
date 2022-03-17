import React, { useState } from "react";
import Axios from "axios";
import "../styles/SignUp.scss";
import logo from "../images/logo.png";
import Banner from "../images/banner.png";
import { Link } from "react-router-dom";

function SignUp() {
  const [emailReg, setEmailReg] = useState("");
  const [fullnameReg, setFullnameReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [regStatus, setRegStatus] = useState("");
  const register = () => {
    Axios.post("http://localhost:3001/signup", {
      username: usernameReg,
      password: passwordReg,
      useremail: emailReg,
      fullname: fullnameReg,
    }).then((response) => {
      if (response.data.message) {
        setRegStatus(response.data.message);
      }
      console.log(response.data);
    });
  };

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
              <button className="uploadProfilePic">
                Upload Profile picture
              </button>
              <input
                type="text"
                placeholder="Phone number or email address"
                onChange={(e) => {
                  setEmailReg(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Full name"
                onChange={(e) => {
                  setFullnameReg(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              />

              <button className="signupButton" onClick={register}>
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
        <h1> {regStatus}</h1>
      </div>
    </div>
  );
}

export default SignUp;
