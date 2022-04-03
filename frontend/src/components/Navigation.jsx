import { Link } from "react-router-dom";
import React, { Component } from "react";

import "../styles/Navigation.scss";
import "../styles/Menu.scss";
import logo from "../images/logo.png";
import { ReactComponent as SearchIcon } from "../images/searchIcon.svg";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as NewPost } from "../images/newPost.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Logout } from "../images/logout.svg";

import image from "../images/temp.jpg";

import ProfileIcon from "./ProfileIcon.js";
import { UserConsumer } from "../context/UserContext";
import Auth from "../utils/AuthHelper";

const auth = new Auth();

class Navigation extends Component {
  render() {
    return (
      <UserConsumer>
        {(user) => (
          <div className="navigation">
            <div className="navContainer">
              <Link to="/">
                <img className="logo" src={logo} alt="medialab logo" />
              </Link>
              {user.isLoggedIn ? (
                <>
                  <div className="search">
                    <SearchIcon className="icon" />
                    <span className="searchText">Search</span>
                  </div>
                  <div className="menu">
                    <Link to="/">
                      <Home className="icon" />
                    </Link>
                    <Link to="/inbox">
                      <Inbox className="icon" />
                    </Link>
                    <Link to="/upload">
                      <NewPost className="icon" />
                    </Link>
                    <Link to="/explore">
                      <Explore className="icon" />
                    </Link>
                    <Link to="/notifications">
                      <Notifications className="icon" />
                    </Link>
                    <Link to={"/user/" + user.id}>
                      <ProfileIcon iconSize="small" image={image} />
                    </Link>
                    <Link to={"/"}>
                      <Logout className="logouticon" onClick={auth.logout} />
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="menu">
                    <Link to="/signin">Login</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </UserConsumer>
    );
  }
}

export default Navigation;
