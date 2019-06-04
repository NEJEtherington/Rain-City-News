import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { getSingleArticle, getUser } from "../Api";
import Comments from "./Comments";
import Voter from "./Voter";

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
            <h5>Author: {article.author}</h5>
            <h5>Posted: {new Date(article.created_at).toLocaleString()}</h5>
            <h3>{article.title}</h3>
            <h5>Topic: {article.topic}</h5>
            <p className="text">{article.body}</p>
            {this.props.username && (
              <Voter
                votes={article.votes}
                id={article.article_id}
                type="article"
              />
            )}
            <GoogleFontLoader
              fonts={[
                {
                  font: "IM Fell DW Pica SC",
                  weights: [400, "400i"]
                }
              ]}
            />
            <h3
              className="center"
              style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
            >
              Comments
            </h3>
            <Comments id={this.props.id} username={this.props.username} />
          </>
        ) : (
          <>
            <GoogleFontLoader
              fonts={[
                {
                  font: "IM Fell DW Pica SC",
                  weights: [400, "400i"]
                }
              ]}
            />
            <h2
              style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
              className="center"
            >
              loading...
            </h2>
          </>
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
