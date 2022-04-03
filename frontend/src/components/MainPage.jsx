import React, { Component } from "react";

import PostCards from "./PostCards";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

import "../styles/MainPage.scss";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/post", {
      method: "GET",
      mode: "cors",
      credentials: "include",
      redirect: "follow",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.responseText);
        }
      })
      .then((items) => {
        console.log(items);
        this.setState({
          error: null,
          items: items,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
        });
        console.log(error);
      });
  }

  render() {
    const { error, items } = this.state;
    if (error) {
      return <div>Error</div>;
    } else {
      return (
        <main>
          <div className="container-mainpage">
            <div className="cards">
              <Stories />
              {items.map((item) => (
                <PostCards data={item} key={item.id}></PostCards>
              ))}
            </div>
            <Sidebar />
          </div>
        </main>
      );
    }
  }
}
