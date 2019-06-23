import React from "react";
import Voter from "./Voter";
import { deleteComment } from "../Api";
import "../App.css";
const moment = require("moment");

const CommentCard = props => {
  const { comment, username, updateForDeletedComment } = props;
  const { author, created_at, body, votes, comment_id, avatar_url } = comment;
  const date = moment(created_at).fromNow();
  const newComment = (
    <li>
      <div className="cardHeaderFooter">
        <div className="cardAvatarUsername">
          <img className="avatar" alt="avatar" src={avatar_url} />
          <h5 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>
            {author}
          </h5>
        </div>
        <h5 style={{ fontFamily: "IM Fell DW Pica, monospaced" }}>{date}</h5>
      </div>
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
};

export default CommentCard;
