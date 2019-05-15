import React from "react";
import "../App.css";
import { getComments } from "../Api";
import CommentCard from "./CommentCard";

class Comments extends React.Component {
  state = {
    comments: []
  };

  render() {
    // console.log("Comments", this.props);
    return (
      <div>
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
}

export default Comments;
