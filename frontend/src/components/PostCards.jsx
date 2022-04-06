import React, { Component } from "react";

import Profile from "./Profile";
import "../styles/CardMenu.scss";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";

import { ReactComponent as CardButton } from "../images/cardButton.svg";

import "../styles/PostCards.scss";

export default class PostCards extends Component {
  constructor(props) {
    super(props);
    this.state = props.data;
    this.state.error = null;
    if (props.data.imgSrc) {
      this.state.imgSrc = props.data.imgSrc;
    } else {
      this.state.imgSrc = "";
    }
  }
  componentDidMount() {
    if (this.state.img_id) {
      let headers = new Headers();
      headers.append("Authorization", "Bearer " + localStorage.getItem("jwt"));
      fetch("http://localhost:3001/api/img/" + this.state.img_id, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        redirect: "follow",
        headers: headers,
      })
        .then((res) => {
          return res.blob();
        })
        .then(
          (blob) => {
            this.setState({
              error: null,
              imgSrc: URL.createObjectURL(blob),
            });
          },
          (error) => {
            this.setState({
              error: true,
            });
            console.log(error);
          }
        );
    }
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({ ...newProps.data });
  }
  render() {
    const data = this.state;
    return (
      <div className="postCard">
        <div className="postCard-header">
          <Profile
            iconSize="medium"
            username={data.username}
            storyBorder={true}
          />
          <CardButton className="cardButton" />
        </div>
        <img
          src={data.imgSrc !== "" ? data.imgSrc : this.state.imgSrc}
          alt=""
          className="cardImage"
        />
        <div className="cardMenu">
          <div className="interactions">
            <Notifications
              className={data.liked ? "cardMenuIcon-red" : "cardMenuIcon"}
              onClick={this.like}
            />
            <Comments className="cardMenuIcon" />
            <Inbox className="cardMenuIcon" />
          </div>
          <Bookmark className="cardMenuIcon" />
        </div>
        <div className="likedBy">
          <span>{data.likes} likes</span>
          <span>
            <strong>{data.username}</strong> {data.description}
          </span>
        </div>
        {/* <div className="comments">
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                accountName={comment.user}
                comment={comment.text}
              />
            );
          })}
        </div> */}
        <div className="timePosted">
          Posted on{" "}
          {data.added ? data.added.replace("T", " ").replace("Z", " ") : ""}
        </div>
        <div className="addComment">
          <div className="commentText">Add a comment...</div>
          <div className="postText">Post</div>
        </div>
      </div>
    );
  }

  like = (e) => {
    let headers = new Headers();
    let likeOrUnlike = "like";
    if (this.state.liked) {
      likeOrUnlike = "unlike";
    }
    headers.append("Authorization", "Bearer " + localStorage.getItem("jwt"));
    fetch(
      "http://localhost:3001/api/post/" + this.state.id + "/" + likeOrUnlike,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        redirect: "follow",
        headers: headers,
      }
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          if (this.state.liked) {
            this.setState({
              liked: 0,
              likes: this.state.likes - 1,
            });
          } else {
            this.setState({
              liked: 1,
              likes: this.state.likes + 1,
            });
          }
          return res.text();
        } else {
          res.text().then((error) => {
            console.log(error);
          });
        }
      })
      .then(
        (text) => {
          console.log(text);
        },
        (error) => {
          this.setState({
            error: true,
          });
          console.log(error);
        }
      );
  };
}
