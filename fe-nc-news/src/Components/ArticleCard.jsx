import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  const newArticle = (
    <li>
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Posted: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <br />
    </li>
  );
  return newArticle;
};

export default ArticleCard;
