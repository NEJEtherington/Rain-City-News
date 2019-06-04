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
              }
            ]}
          />
          <h3 style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
            {article.title}
          </h3>
        </Link>
        <p>Topic: {article.topic}</p>
        {this.state.userAvatar && (
          <img alt="avatar" src={this.state.userAvatar} />
        )}
        <p>Author: {article.author}</p>
        <p>Posted: {new Date(article.created_at).toLocaleString()}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
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
