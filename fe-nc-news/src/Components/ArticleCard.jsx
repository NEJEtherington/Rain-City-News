import React from "react";
import { Link } from "@reach/router";
import GoogleFontLoader from "react-google-font-loader";
import { getUser } from "../Api";

class ArticleCard extends React.Component {
  state = {
    userAvatar: null
  };

  render() {
    const article = this.props.article;
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
        {this.state.userAvatar && (
          <img className="avatar" alt="avatar" src={this.state.userAvatar} />
        )}
        <p style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
          Author: {article.author}
        </p>
        <p style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
          Posted: {new Date(article.created_at).toLocaleString()}
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
  }

  componentDidMount = () => {
    const username = this.props.article.author;
    getUser(username).then(user =>
      this.setState({ userAvatar: user.avatar_url })
    );
  };
}

export default ArticleCard;
