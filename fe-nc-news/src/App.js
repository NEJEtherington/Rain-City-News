import React from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";
import SingleArticle from "./Components/SingleArticle";
import Comments from "./Components/Comments";
import LoginBox from "./Components/LoginBox";

class App extends React.Component {
  state = {
    loggedInUser: ""
  };

  render() {
    return (
      <div className="App">
        <Header
          loggedInUser={this.state.loggedInUser}
          logoutUser={this.logoutUser}
        />
        <Router>
          <Articles path="/articles" />
          <Articles path="/topics/:topic" />
          <SingleArticle path="/articles/:id" />
          <Comments path="/articles/:id/comments" />
          <Topics path="/topics" />
          <LoginBox path="/login" loginUser={this.loginUser} />
        </Router>
      </div>
    );
  }

  loginUser = username => {
    this.setState({ loggedInUser: username }, () => navigate("/articles"));
  };

  logoutUser = () => {
    this.setState({ loggedInUser: "" }, () => navigate("/login"));
  };
}

export default App;
