import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { postComment } from "../Api";

class PostComment extends React.Component {
  state = {
    commentInput: "",
    newPost: false
  };

  render() {
    return (
      <div>
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
        <form onSubmit={this.handleSubmit} className="center">
          <br />
          <textarea
            onChange={this.handleInput}
            type="text"
            value={this.state.commentInput}
            style={{ fontFamily: "IM Fell DW Pica, monospaced" }}
            id="textInput"
          />
          <br />
          <button
            style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
            disabled={this.state.commentInput === ""}
          >
            Post comment
          </button>
        </form>
        {this.state.newPost && (
          <div className="voter">
            <FontAwesomeIcon id="voter" icon={faCloudRain} size="lg" />
            <p style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
              Comment posted!
            </p>
            <FontAwesomeIcon id="voter" icon={faCloudRain} size="lg" />
          </div>
        )}
      </div>
    );
  }

  handleInput = event => {
    this.setState({ commentInput: event.target.value, newPost: false });
  };

  handleSubmit = event => {
    const { id, username, updatePostedComments } = this.props;
    const { commentInput } = this.state;
    event.preventDefault();
    postComment(id, username, commentInput).then(res =>
      updatePostedComments(res.data.comment)
    );
    this.setState({ commentInput: "", newPost: true });
  };
}

export default PostComment;
