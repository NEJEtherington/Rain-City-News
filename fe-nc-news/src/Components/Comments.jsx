import React from "react";
import "../App.css";
import { getComments, postComment } from "../Api";
import CommentCard from "./CommentCard";

class Comments extends React.Component {
  state = {
    comments: [],
    commentInput: null
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <textarea onChange={this.handleInput} type="text" />
          <button>Post comment!</button>
        </form>
        {this.state.comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <ul className="list">
                <CommentCard comment={comment} />
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

  handleInput = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleSubmit = event => {
    const { id, username } = this.props;
    const { commentInput } = this.state;
    event.preventDefault();
    username
      ? postComment(id, username, commentInput)
      : alert("please log in to post a comment!");
  };
}

export default Comments;
