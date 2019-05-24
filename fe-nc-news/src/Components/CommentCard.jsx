import React from "react";
import Voter from "./Voter";

const CommentCard = ({ comment }) => {
  const newComment = (
    <li>
      <h5>Author: {comment.author}</h5>
      <h5>Posted: {new Date(comment.created_at).toLocaleString()}</h5>
      <p>{comment.body}</p>
      <Voter votes={comment.votes} id={comment.comment_id} type="comment" />
    </li>
  );
  return newComment;
};

export default CommentCard;
