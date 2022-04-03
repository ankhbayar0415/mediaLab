import React, { Component } from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/AuthHelper";

import "../styles/Post.scss";

const auth = new Auth();

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = props.data;
    this.state.imgSrc = "";
    this.state.error = null;
  }
  componentDidMount() {
    auth
      .fetch("/api/img/" + this.state.img_id, {
        method: "GET",
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
            error: error,
          });
          console.log(error);
        }
      );
  }
  render() {
    const post = this.state;

    return (
      <Link to={"/post/" + post.id} className="postThumb">
        <img src={this.state.imgSrc} alt={post.description} />
        <div className="postThumb-info">
          <span>{post.likes}</span>
        </div>
      </Link>
    );
  }
}
