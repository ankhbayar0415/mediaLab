import "../styles/SignUp.scss";
import logo from "../images/logo.png";

function SignUp() {
  return (
    <div className="listSignUp">
      <div className="signUpMenu">
        <img className="logo" src={logo} alt="logo" />
        <div className="descContainer">
          <div className="descText">
            Sign Up to see photos and videos from your friends
          </div>
        </div>
        <div className="signUpForm">
          <input type="text" placeholder="Phone number or email address" />
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="uploadProfilePic">Upload Profile picture</button>
          <button className="signupButton">Sign Up</button>
        </div>
      </div>
      <div className="signUp">
        <span className="signUpText">
          Have an account? <a>Sign In</a>
        </span>
      </div>
      <div className="copyright">
        <span>Made by Ankhbayar Enkhlkhagva 2022</span>
      </div>
    </div>
  );
}

export default SignUp;
