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
            <button onClick={this.handleClick} value={"created_at"}>
              Posted
            </button>
            <button onClick={this.handleClick} value={"comment_count"}>
              Comments
            </button>
            <button onClick={this.handleClick} value={"votes"}>
              Votes
            </button>
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

export default Articles;
