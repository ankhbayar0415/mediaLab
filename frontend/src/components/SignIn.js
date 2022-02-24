import "../styles/SignIn.scss";
import logo from "../images/logo.png";

function SignIn() {
  return (
    <div className="signinContainer">
      <div className="signinMenu">
        <img className="logo" src={logo} alt="logo" />
        <div className="signInForm">
          <input type="text" placeholder="Phone number, username or email" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Log In</button>
          <div className="forgotPassword">
            <span>Forgot your password?</span>
          </div>
        </div>
      </div>
      <div className="signIn">
        <div className="signInText">
          Don't have an account? <a>Sign Up</a>
        </div>
      </div>
      <div className="copyright">
        <span>Made by Ankhbayar Enkhlkhagva 2022</span>
      </div>
    </div>
  );
}

export default SignIn;
