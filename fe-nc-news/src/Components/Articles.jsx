import React from "react";
import "../App.css";
import { getArticles } from "../Api";
import ArticleCard from "./ArticleCard";

class Articles extends React.Component {
  state = {
    articles: []
  };

  render() {
    // console.log("Articles", this.props);
    return (
      <div>
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

  componentDidMount() {
    const queries = { topic: this.props.topic };
    getArticles(queries).then(articles => {
      this.setState({ articles });
    });
  }
}

export default Articles;
