import React from "react";
import "../App.css";
import { getComments } from "../Api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

class Comments extends React.Component {
  state = {
    comments: []
  };

  render() {
    return (
      <div>
        <PostComment
          id={this.props.id}
          username={this.props.username}
          updateComments={this.updateComments}
        />
        {this.state.comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <ul className="list">
                <CommentCard comment={comment} username={this.props.username} />
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    getComments(this.props.id).then(comments => {
      this.setState({ comments });
    });
  }

  updateComments = newComment => {
    this.setState({ comments: [newComment, ...this.state.comments] });
  };
}

export default Comments;
