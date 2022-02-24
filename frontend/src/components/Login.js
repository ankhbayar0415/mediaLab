import "../styles/Login.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Banner from "../images/banner.png";

function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <img className="banner" src={Banner} alt="banner" />
        {/* <SignIn /> */}
        <SignUp />
      </div>
    </div>
  );
}

export default Login;
