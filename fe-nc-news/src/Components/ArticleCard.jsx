import React from "react";

const ArticleCard = ({ article }) => {
  const newArticle = (
    <li>
      <h3>{article.title}</h3>
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
