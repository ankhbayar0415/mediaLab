import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import "../styles/Menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as NewPost } from "../images/newPost.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import image from "../images/temp.jpg";

import ProfileIcon from "./ProfileIcon.js";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="/mainpage">
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
        <Link to="/profile">
          <ProfileIcon iconSize="small" image={image} />
        </Link>
      </div>
    );
  }
}

export default Menu;
