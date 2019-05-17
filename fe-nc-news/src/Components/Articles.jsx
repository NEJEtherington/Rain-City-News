import React from "react";
import "../App.css";
import { getArticles } from "../Api";
import ArticleCard from "./ArticleCard";

class Articles extends React.Component {
  state = {
    articles: [],
    sortBy: null
  };

  render() {
    return (
      <div>
        <div className="dropdown">
          <h5 className="dropbtn">Sort by</h5>
          <div className="dropdown-content">
            <button onClick={this.handlePostedClick}>Posted</button>
            <button onClick={this.handleCommentsClick}>Comments</button>
            <button onClick={this.handleVotesClick}>Votes</button>
          </div>
        </div>
        {this.state.articles.map(article => {
          return (
            <div key={article.article_id} className="card">
              <ul className="list">
                <ArticleCard article={article} />
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  //refactor the three functions below into a single function?
  handleCommentsClick = () => {
    this.setState({ sortBy: "comment_count" });
  };

  handlePostedClick = () => {
    this.setState({ sortBy: "created_at" });
  };

  handleVotesClick = () => {
    this.setState({ sortBy: "votes" });
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

export default Articles;
