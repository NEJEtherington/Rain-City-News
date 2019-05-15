import React from "react";
import "../App.css";
import { getArticles } from "../Api";
import { Link } from "@reach/router";
import ArticleCard from "./ArticleCard";

class Articles extends React.Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <div key={article.article_id}>
              <ul className="list">
                <Link to={`/articles/${article.article_id}`}>
                  <ArticleCard article={article} />
                </Link>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    const queries = { topic: this.props.topic };
    getArticles(queries).then(articles => {
      this.setState({ articles });
    });
  }
}

export default Articles;
