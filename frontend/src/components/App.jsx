import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import MainPage from "./MainPage";
import UserProfile from "./UserProfile";
import Inbox from "./Inbox";
import Upload from "./Upload";
import "../styles/App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/upload" element={<Upload />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Under maintenance</p>
                </main>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
