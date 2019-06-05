import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllo } from "@fortawesome/free-brands-svg-icons";
import { faMehRollingEyes } from "@fortawesome/free-solid-svg-icons";
import { patchArticleVotes, patchCommentVotes } from "../Api";

class Voter extends Component {
  state = {
    votes: 0
  };

  render() {
    return (
      <div className="voter">
        <button
          className="votebutton"
          onClick={() => this.handleVote(this.props.id, 1)}
          disabled={this.state.votes === 1}
        >
          <FontAwesomeIcon className="icon" icon={faEllo} size="2x" />
        </button>
        <h3 id="voter" style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
          {this.state.votes + this.props.votes}
        </h3>
        <button
          className="votebutton"
          onClick={() => {
            this.handleVote(this.props.id, -1);
          }}
          disabled={this.state.votes === -1}
        >
          <FontAwesomeIcon icon={faMehRollingEyes} size="2x" />
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

export default Voter;
