import React from "react";
import { postComment } from "../Api";

class PostComment extends React.Component {
  state = {
    commentInput: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <textarea
            onChange={this.handleInput}
            type="text"
            value={this.state.commentInput}
          />
          <button>Post comment!</button>
        </form>
      </div>
    );
  }

  handleInput = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleSubmit = event => {
    const { id, username, updateComments } = this.props;
    const { commentInput } = this.state;
    event.preventDefault();
    username
      ? postComment(id, username, commentInput).then(res =>
          updateComments(res.data.comment)
        )
      : alert("please log in to post a comment!");
    this.setState({ commentInput: "" });
  };
}

export default PostComment;
