import "../styles/App.scss";
import { BrowserRoute as Router, Switch, Route } from "react-router-dom";

import MainPage from "./MainPage";
import UserProfile from "./UserProfile";
import Navigation from "./Navigation";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
