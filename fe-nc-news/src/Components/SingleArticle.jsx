import React from "react";
import { getSingleArticle } from "../Api";

class SingleArticle extends React.Component {
  state = {
    article: {}
  };

  render() {
    return (
      <div>
        <h5>Author: {this.state.article.author}</h5>
        <h5>Posted: {this.state.article.created_at}</h5>
        <h3>{this.state.article.title}</h3>
        <h5>Topic: {this.state.article.topic}</h5>
        <p>{this.state.article.body}</p>
        <button>Downvote</button>
        <p>{this.state.article.votes}</p>
        <button>Upvote</button>
        <h5>Comments</h5>
      </div>
    );
  }

  componentDidMount() {
    console.log("mounted(SingleArticle)", this.props);
    getSingleArticle(this.props.id).then(article => {
      this.setState({ article });
    });
  }
}

export default SingleArticle;
