import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PostCards from "./PostCards";
import { ReactComponent as BackButton } from "../images/backButton.svg";

import "../styles/Upload.scss";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      description: "",
      posted: false,
      previewPost: {
        imgSrc: "",
        description: "Description",
        username: "preview",
        id: 0,
        likes: 999,
      },
    };
    this.fileInput = React.createRef();
  }
  render() {
    if (this.state.posted) {
      return <Redirect to="/" />;
    } else {
      return (
        <main>
          <div className="container-upload">
            <div className="upload-box">
              <div className="upload-header">
                <div className="upload-header-content">
                  <Link to="/">
                    <BackButton className="backButton" />
                  </Link>
                  Create New Post
                  <a onClick={this.handleSubmit}>Share</a>
                </div>
              </div>
              <div className="upload-content">
                <div className="upload-pic">
                  <div className="preview-image">
                    <PostCards data={this.state.previewPost}></PostCards>
                  </div>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="upload-icon"
                    ref={this.fileInput}
                    onChange={this.preview}
                  />
                  <label htmlFor="image">Choose a file</label>
                </div>
                <div className="upload-desc">
                  <div className="upload-desc-header">Description</div>
                  <textarea
                    placeholder="Write a description..."
                    name="description"
                    rows="8"
                    cols="50"
                    className="upload-desc-desc"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
  preview = (e) => {
    let self = this;
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ef) {
        const newPreviewPost = Object.assign({}, self.state.previewPost, {
          imgSrc: ef.target.result,
        });
        self.setState({
          previewPost: newPreviewPost,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newPreviewPost = Object.assign({}, this.state.previewPost, {
      [name]: value,
    });
    this.setState({
      [name]: value,
      previewPost: newPreviewPost,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", this.state.description);
    formData.append("image", this.fileInput.current.files[0]);

    console.log(formData);

    fetch("http://localhost:3001/api/post", {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: formData,
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        res.text().then((text) => {
          console.log(text);
          this.setState({
            posted: true,
          });
        });
      } else {
        res.text().then((text) => {
          console.log(text);
          this.setState({
            error: text,
          });
        });
      }
    });
  };
}
