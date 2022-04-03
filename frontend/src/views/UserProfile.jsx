import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import Profile from "../components/Profile";

import Auth from "../utils/AuthHelper";

import "../styles/UserProfile.scss";

import image from "../images/temp.jpg";
import { ReactComponent as Settings } from "../images/settings.svg";
import { ReactComponent as PostsGrid } from "../images/PostsGrid.svg";
import { ReactComponent as Videos } from "../images/videos.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";
import { ReactComponent as Tagged } from "../images/tagged.svg";

const auth = new Auth();

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      user: {},
    };
  }
  componentDidMount() {
    auth
      .fetch("/api/user/" + this.props.match.params.id, {
        method: "GET",
      })
      .then((body) => {
        console.log(body);
        this.setState({
          error: false,
          user: body,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: err,
        });
      });
  }

  render() {
    const { error, user } = this.state;
    if (error) {
      return <div>Error</div>;
    } else {
      return (
        <main>
          <div className="container-userprofile">
            <div className="profileHeader">
              <div className="pPic">
                <Profile
                  iconSize="huge"
                  image={image}
                  storyBorder={true}
                  hideAccountName={true}
                />
              </div>

              <div className="userInfo">
                <div className="infoHeader">
                  <div className="userName">{user.username}</div>
                  <button> Edit Profile </button>
                  <Settings className="icon" />
                </div>
                <div className="insight">
                  <div className="likes">
                    <strong>{user.posts_num}</strong> posts
                  </div>
                  <div className="likes">
                    <strong>{user.followers_num}</strong> followers
                  </div>
                  <div className="likes">
                    <strong>{user.following_num}</strong> following
                  </div>
                </div>
                <div className="nameBio">
                  <div className="fullName">{user.fullname}</div>
                  <div className="bio">{user.bio}</div>
                </div>
              </div>
            </div>
          </div>
          {/* <ProfileFeed /> */}
          <div className="post-grid-header">
            <Link to={"/user/" + user.id} className="options">
              <PostsGrid className="headerIcon" />
              POSTS
            </Link>
            <Link to={"/user/" + user.id} className="options">
              <Videos className="headerIcon" />
              VIDEOS
            </Link>
            <Link to={"/user/" + user.id} className="options">
              <Bookmark className="headerIcon" />
              SAVED
            </Link>
            <Link to={"/user/" + user.id} className="options">
              <Tagged className="headerIcon" />
              TAGGED
            </Link>
          </div>
          <div className="post-grid">
            {user.posts?.map((post) => (
              <Post data={post} key={post.id} />
            ))}
          </div>
        </main>
      );
    }
  }
}
