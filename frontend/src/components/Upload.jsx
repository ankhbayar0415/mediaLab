import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCards from "./PostCards";
import { ReactComponent as BackButton } from "../images/backButton.svg";

import "../styles/Upload.scss";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      description: "",
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
    return (
      <form className="uploadForm" onSubmit={this.handleSubmit}>
        <h3>Upload an image so all you followers can see it!</h3>
        <textarea
          type="textarea"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          type="file"
          name="image"
          ref={this.fileInput}
          onChange={this.preview}
        />
        <input type="submit" className="btn btn-success" value="Upload" />

        <h3>Preview:</h3>
        <PostCards data={this.state.previewPost}></PostCards>
      </form>
    );
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
