import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
import Topics from "./Components/Topics";
import SingleArticle from "./Components/SingleArticle";
import Comments from "./Components/Comments";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Articles path="/articles" />
          <Articles path="/topics/:topic" />
          <SingleArticle path="/articles/:id" />
          <Comments path="/articles/:id/comments" />
          <Topics path="/topics" />
        </Router>
      </div>
    );
  }
}

export default App;
