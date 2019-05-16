import React, { Component } from "react";
import { patchArticleVotes, patchCommentVotes } from "../Api";

export default class Voter extends Component {
  state = {
    votes: 0
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.handleVote(this.props.id, 1)}
          disabled={this.state.votes === 1}
        >
          Like
        </button>
        <p>{this.state.votes + this.props.votes}</p>
        <button
          onClick={() => {
            this.handleVote(this.props.id, -1);
          }}
          disabled={this.state.votes === -1}
        >
          Dislike
        </button>
      </div>
    );
  }

  handleVote = (id, direction) => {
    this.props.type === "article"
      ? patchArticleVotes(id, direction)
      : patchCommentVotes(id, direction);

    this.setState(prevState => {
      return {
        votes: prevState.votes + direction
      };
    });
  };
}
