import React from "react";

const CommentCard = ({ comment }) => {
  const newComment = (
    <li>
      <h5>Author: {comment.author}</h5>
      <h5>Posted: {comment.created_at}</h5>
      <p>{comment.body}</p>
      <button>Like</button>
      <p>{comment.votes}</p>
      <button>Dislike</button>
    </li>
  );
  return newComment;
};

export default CommentCard;
