import React from "react";
import { getSingleArticle } from "../Api";

class SingleArticle extends React.Component {
  state = {
    article: {}
  };

  render() {
    const { article } = this.state;
    return (
      <div>
        <h5>Author: {article.author}</h5>
        <h5>Posted: {article.created_at}</h5>
        <h3>{article.title}</h3>
        <h5>Topic: {article.topic}</h5>
        <p>{article.body}</p>
        <button>Downvote</button>
        <p>{article.votes}</p>
        <button>Upvote</button>
        <h5>Comments</h5>
      </div>
    );
  }

  componentDidMount() {
    console.log("mounted(SingleArticle)");
    getSingleArticle(this.props.id).then(article => {
      this.setState({ article });
    });
  }
}

export default SingleArticle;
