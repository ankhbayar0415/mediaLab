import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import SignUp from "../views/Register";
import SignIn from "../views/Login";
import Index from "../views/Index";
import UserProfile from "../views/UserProfile";
import Inbox from "./Inbox";
import Upload from "./Upload";

import "../styles/App.scss";

import { UserProvider } from "../context/UserContext";
import Navigation from "./Navigation";
import Auth from "../utils/AuthHelper";

const auth = new Auth();

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.loggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <UserProvider>
        <Navigation />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <PrivateRoute path="/index" exact component={Index} />
        <PrivateRoute path="/user/:id" exact component={UserProfile} />
        <PrivateRoute path="/inbox" exact component={Inbox} />
        <PrivateRoute path="/upload" exact component={Upload} />
      </UserProvider>
    </Router>
  );
}

export default App;
