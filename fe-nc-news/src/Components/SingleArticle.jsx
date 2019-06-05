import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { getSingleArticle, getUser } from "../Api";
import Comments from "./Comments";
import Voter from "./Voter";
import LoadingMessage from "./LoadingMessage";

class SingleArticle extends React.Component {
  state = {
    article: null,
    userAvatar: null
  };

  render() {
    const { article } = this.state;
    return (
      <div>
        {article ? (
          <>
            {this.state.userAvatar && (
              <img
                className="avatar"
                alt="avatar"
                src={this.state.userAvatar}
              />
            )}
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
            <h5 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
              Author: {article.author}
            </h5>
            <h5 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
              Posted: {new Date(article.created_at).toLocaleString()}
            </h5>
            <h2 style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
              {article.title}
            </h2>
            <h5 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
              Topic: {article.topic}
            </h5>
            <p
              style={{ fontFamily: "IM Fell DW Pica, monospaced" }}
              className="text"
            >
              {article.body}
            </p>
            {this.props.username && (
              <Voter
                votes={article.votes}
                id={article.article_id}
                type="article"
              />
            )}

            <h3
              className="center"
              style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
            >
              Comments
            </h3>
            <Comments id={this.props.id} username={this.props.username} />
          </>
        ) : (
          <LoadingMessage />
        )}
      </div>
    );
  }

  componentDidMount() {
    getSingleArticle(this.props.id).then(article => {
      this.setState({ article });
    });
  }

  componentDidUpdate() {
    if (this.state.article) {
      const username = this.state.article.author;
      getUser(username).then(user =>
        this.setState({ userAvatar: user.avatar_url })
      );
    }
  }
}

export default SingleArticle;
