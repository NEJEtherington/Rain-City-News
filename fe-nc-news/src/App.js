import React from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";
import SingleArticle from "./Components/SingleArticle";
import Comments from "./Components/Comments";
import Voter from "./Components/Voter";

class App extends React.Component {
  state = {
    currentUser: ""
  };

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          logoutUser={this.logoutUser}
          loginUser={this.loginUser}
        />
        <Router>
          <Articles path="/articles" />
          <Articles path="/topics/:topic" />
          <SingleArticle
            path="/articles/:id"
            username={this.state.currentUser}
          />
          <Comments path="/articles/:id/comments" />
          <Topics path="/topics" />
          {/* <LoginBox path="/login" loginUser={this.loginUser} /> */}
          <Voter path="/voter" />
        </Router>
      </div>
    );
  }

  loginUser = username => {
    this.setState({ currentUser: username }, () => navigate("/articles"));
    localStorage.setItem("data", JSON.stringify(this.state.currentUser));
  };

  logoutUser = () => {
    this.setState({ currentUser: "" });
    localStorage.removeItem("data");
  };

  componentDidMount = () => {
    const data = localStorage.getItem("data");
    if (data) {
      const state = JSON.parse(data);
      this.setState({ currentUser: state });
    }
  };
}

export default App;
