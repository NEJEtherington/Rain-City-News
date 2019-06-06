import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import Topics from "./Components/Topics";
import SingleArticle from "./Components/SingleArticle";
import Comments from "./Components/Comments";
import Voter from "./Components/Voter";
import ArticlesPage from "./Components/ArticlesPage";
import Error from "./Components/Error";

class App extends React.Component {
  state = {
    currentUser: null
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
          <ArticlesPage path="/articles" />
          <ArticlesPage path="/topics/:topic" />
          <SingleArticle
            path="/articles/:id"
            username={this.state.currentUser}
          />
          <Comments path="/articles/:id/comments" />
          <Topics path="/topics" />
          <Voter path="/voter" />
          <Error default />
        </Router>
      </div>
    );
  }

  loginUser = username => {
    this.setState({ currentUser: username });
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
