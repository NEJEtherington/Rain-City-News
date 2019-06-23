import React from "react";
import { Link } from "@reach/router";
import GoogleFontLoader from "react-google-font-loader";
import "../App.css";
const moment = require("moment");

const ArticleCard = props => {
  const article = props.article;
  const date = moment(article.created_at).fromNow();
  const newArticle = (
    <li>
      <div className="cardHeaderFooter">
        <div className="cardAvatarUsername">
          <img className="avatar" alt="avatar" src={article.avatar_url} />
          <h4 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
            {article.author}
          </h4>
        </div>
        <h4 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>{date}</h4>
      </div>
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
        <h2 style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
          {article.title}
        </h2>
      </Link>
      <p style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
        Topic: {article.topic}
      </p>
      <div className="cardHeaderFooter">
        <h4 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
          Votes: {article.votes}
        </h4>
        <h4 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
          Comments: {article.comment_count}
        </h4>
      </div>
      <br />
    </li>
  );
  return newArticle;
};

export default ArticleCard;
