import React from "react";
import Voter from "./Voter";
import { deleteComment, getUser } from "../Api";
import "../App.css";

class CommentCard extends React.Component {
  state = {
    userAvatar: null
  };
  render() {
    const { comment, username, updateForDeletedComment } = this.props;
    const { author, created_at, body, votes, comment_id } = comment;
    const newComment = (
      <li>
        {this.state.userAvatar && (
          <img className="avatar" alt="avatar" src={this.state.userAvatar} />
        )}
        <h5 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
          Author: {author}
        </h5>
        <h5 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
          Posted: {new Date(created_at).toLocaleString()}
        </h5>
        <p
          style={{ fontFamily: "IM Fell DW Pica, monospaced" }}
          className="commentText"
        >
          {body}
        </p>
        {username && <Voter votes={votes} id={comment_id} type="comment" />}
        {username === author && (
          <div className="center">
            <button
              style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
              onClick={() =>
                deleteComment(comment_id).then(updateForDeletedComment)
              }
            >
              Delete Comment
            </button>
          </div>
        )}
      </li>
    );
    return newComment;
  }

  componentDidMount = () => {
    const username = this.props.comment.author;
    getUser(username).then(user =>
      this.setState({ userAvatar: user.avatar_url })
    );
  };
}

export default CommentCard;
