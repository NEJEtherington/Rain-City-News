import React from "react";
import "../App.css";
import ArticleCard from "./ArticleCard";

const ArticlesList = props => {
  return (
    <div>
      {props.articles.map(article => {
        return (
          <div key={article.article_id} className="card">
            <ul className="center">
              <ArticleCard article={article} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesList;
