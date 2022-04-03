import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUp from "../views/Register";
import SignIn from "../views/Login";
import Index from "../views/Index";
import UserProfile from "../views/UserProfile";
import Inbox from "./Inbox";
import Upload from "./Upload";

import "../styles/App.scss";

import { UserProvider } from "../context/UserContext";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navigation />
        <Route path="/" exact component={Index} />
        <Route path="/user/:id" exact component={UserProfile} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/upload" exact component={Upload} />
      </UserProvider>
    </Router>
  );
}

export default App;
