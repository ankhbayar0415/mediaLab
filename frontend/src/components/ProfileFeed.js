import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/ProfileFeed.scss";
import { ReactComponent as PostsGrid } from "../images/PostsGrid.svg";
import { ReactComponent as Videos } from "../images/videos.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";
import { ReactComponent as Tagged } from "../images/tagged.svg";
import ProfileCard from "./ProfileCard";

class ProfileFeed extends Component {
  render() {
    return (
      <>
        <div className="profileFeedContainer">
          <div className="pFeedHeader">
            <Link to="/profile">
              <div className="options">
                <PostsGrid className="headerIcon" />
                <span className="iconName">POSTS</span>
              </div>
            </Link>
            <Link to="/profile">
              <div className="options">
                <Videos className="headerIcon" />
                <span className="iconName">VIDEOS</span>
              </div>
            </Link>
            <Link to="/profile">
              <div className="options">
                <Bookmark className="headerIcon" />
                <span className="iconName">SAVED</span>
              </div>
            </Link>
            <Link to="/profile">
              <div className="options">
                <Tagged className="headerIcon" />
                <span className="iconName">TAGGED</span>
              </div>
            </Link>
          </div>
          <div className="userPosts">
            <ProfileCard
              image="https://picsum.photos/800/900"
              likedByNumber={89}
              commentsNumber={50}
            />
            <ProfileCard
              image="https://picsum.photos/800"
              likedByNumber={1231}
              commentsNumber={124}
            />
            <ProfileCard
              image="https://picsum.photos/800/1000"
              likedByNumber={123}
              commentsNumber={50}
            />
            <ProfileCard
              image="https://picsum.photos/800/850"
              likedByNumber={89}
              commentsNumber={543520}
            />
            <ProfileCard
              image="https://picsum.photos/700/900"
              likedByNumber={82349}
              commentsNumber={24235}
            />
            <ProfileCard
              image="https://picsum.photos/500/900"
              likedByNumber={82349}
              commentsNumber={5450}
            />
            <ProfileCard
              image="https://picsum.photos/200/300"
              likedByNumber={89}
              commentsNumber={50}
            />
            <ProfileCard
              image="https://picsum.photos/800/900"
              likedByNumber={8649}
              commentsNumber={52340}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ProfileFeed;
