import React from "react";
import { Link } from "@reach/router";

class ArticleCard extends React.Component {
  state = {
    userAvatar: null
  };

  render() {
    const article = this.props.article;
    const newArticle = (
      <li>
        <Link to={`/articles/${article.article_id}`}>
          <h3>{article.title}</h3>
        </Link>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Posted: {new Date(article.created_at).toLocaleString()}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
        <br />
      </li>
    );
    return newArticle;
  }
}

export default ArticleCard;
