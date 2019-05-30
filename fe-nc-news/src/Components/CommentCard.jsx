import React from "react";
import Voter from "./Voter";
import { deleteComment } from "../Api";

const CommentCard = ({ comment, username, updateForDeletedComment }) => {
  const { author, created_at, body, votes, comment_id } = comment;
  const newComment = (
    <li>
      <h5>Author: {author}</h5>
      <h5>Posted: {new Date(created_at).toLocaleString()}</h5>
      <p>{body}</p>
      <Voter votes={votes} id={comment_id} type="comment" />
      {username === author && (
        <button
          onClick={() =>
            deleteComment(comment_id).then(updateForDeletedComment)
          }
        >
          Delete Comment
        </button>
      )}
    </li>
  );
  return newComment;
};

export default CommentCard;
