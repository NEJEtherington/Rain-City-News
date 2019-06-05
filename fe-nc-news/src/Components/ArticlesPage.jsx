import React, { Component } from "react";
import GoogleFontLoader from "react-google-font-loader";
import LoadingMessage from "./LoadingMessage";
import ArticlesList from "./ArticlesList";
import { getArticles } from "../Api";
import "../App.css";

class ArticlesPage extends Component {
  state = {
    articles: [],
    sortBy: null
  };

  render() {
    return (
      <div>
        <GoogleFontLoader
          fonts={[
            {
              font: "IM Fell DW Pica SC",
              weights: [400, "400i"]
            }
          ]}
        />
        <div className="sortBy">
          <button
            style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
            onClick={this.handleClick}
            value={"created_at"}
          >
            Sort by Date
          </button>
          <button
            style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
            onClick={this.handleClick}
            value={"comment_count"}
          >
            Sort by Comments
          </button>
          <button
            style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
            onClick={this.handleClick}
            value={"votes"}
          >
            Sort by Votes
          </button>
        </div>

        {!this.state.articles.length ? (
          <LoadingMessage />
        ) : (
          <ArticlesList articles={this.state.articles} />
        )}
      </div>
    );
  }

  handleClick = event => {
    this.setState({ sortBy: event.currentTarget.value });
  };

  componentDidMount() {
    const queries = { topic: this.props.topic };
    getArticles(queries).then(articles => {
      this.setState({ articles });
    });
  }

  componentDidUpdate(_, prevState) {
    const query = { sort_by: this.state.sortBy };
    this.state.sortBy !== prevState.sortBy &&
      getArticles(query).then(articles => {
        this.setState({ articles });
      });
  }
}

export default ArticlesPage;
