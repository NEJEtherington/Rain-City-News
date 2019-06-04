import React from "react";
import { postComment } from "../Api";

class PostComment extends React.Component {
  state = {
    commentInput: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="center">
          <br />
          <textarea
            onChange={this.handleInput}
            type="text"
            value={this.state.commentInput}
          />
          <br />
          <button>Post comment!</button>
        </form>
      </div>
    );
  }

  handleInput = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleSubmit = event => {
    const { id, username, updatePostedComments } = this.props;
    const { commentInput } = this.state;
    event.preventDefault();
    postComment(id, username, commentInput).then(res =>
      updatePostedComments(res.data.comment)
    );
    this.setState({ commentInput: "" });
  };
}

export default PostComment;
