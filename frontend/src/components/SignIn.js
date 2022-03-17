import "../styles/SignIn.scss";
import logo from "../images/logo.png";
import Banner from "../images/banner.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function SignIn() {
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/user").then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  const [useremailReg, setUseremail] = useState("");
  const [passwordReg, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/signin", {
      username: useremailReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.msg);
      }
      console.log(response.data);
    });
  };
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
                placeholder="User Email"
                onChange={(e) => {
                  setUseremail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="loginButton" onClick={login}>
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
        <h1>{loginStatus}</h1>
      </div>
    </div>
  );
}

export default SignIn;
