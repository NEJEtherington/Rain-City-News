import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { getSingleArticle, getUser } from "../Api";
import Comments from "./Comments";
import Voter from "./Voter";
import LoadingMessage from "./LoadingMessage";
import Error from "./Error";
const moment = require("moment");

class SingleArticle extends React.Component {
  state = {
    article: null,
    userAvatar: null,
    err: null
  };

  render() {
    const { article, err } = this.state;
    if (err) return <Error err={err} />;
    return (
      <div className="singleArticle">
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
        {article ? (
          <>
            {this.state.userAvatar && (
              <img
                className="avatar"
                alt="avatar"
                src={this.state.userAvatar}
              />
            )}
            <h5 style={{ fontFamily: "IM Fell DW Pica" }}>{article.author}</h5>
            <h5 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
              {moment(article.created_at).fromNow()}
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
            <Comments
              id={this.props.id}
              username={this.props.username}
              userAvatar={this.state.userAvatar}
            />
          </>
        ) : (
          <LoadingMessage />
        )}
      </div>
    );
  }

  componentDidMount() {
    getSingleArticle(this.props.id)
      .then(article => {
        this.setState({ article });
      })
      .then(() => {
        getUser(this.state.article.author).then(user =>
          this.setState({ userAvatar: user.avatar_url })
        );
      })
      .catch(({ response }) => {
        const errMessage = response.data.msg;
        const errCode = response.status;
        const err = { errMessage, errCode };
        this.setState({ err });
      });
  }
}

export default SingleArticle;
