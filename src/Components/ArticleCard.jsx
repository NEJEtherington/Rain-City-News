import React from "react";
import { Link } from "@reach/router";
import GoogleFontLoader from "react-google-font-loader";
import "../App.css";
const moment = require("moment");

const ArticleCard = props => {
  const article = props.article;
  const date = moment(article.created_at);
  const newArticle = (
    <li>
      <Link to={`/articles/${article.article_id}`}>
        <GoogleFontLoader
          fonts={[
            {
              font: "IM Fell DW Pica SC",
              weights: [400, "400i"]
            },
            {
              font: "IM Fell DW Pica",
              weights: [400, "400i"]
            }
          ]}
        />
        <h3 style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
          {article.title}
        </h3>
      </Link>
      <p style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
        Topic: {article.topic}
      </p>
      <img className="avatar" alt="avatar" src={article.avatar_url} />
      <p style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
        {article.author}
      </p>
      <p style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
        {date._d.toString().slice(0, -34)}
      </p>
      <p style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
        Votes: {article.votes}
      </p>
      <p style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
        Comments: {article.comment_count}
      </p>
      <br />
    </li>
  );
  return newArticle;
};

export default ArticleCard;
