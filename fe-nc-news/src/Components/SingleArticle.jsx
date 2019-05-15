import React from "react";
import { getSingleArticle } from "../Api";
import Comments from "./Comments";

class SingleArticle extends React.Component {
  state = {
    article: {}
  };

  render() {
    // console.log("SingleArticle", this.props);
    const { article } = this.state;
    return (
      <div>
        <h5>Author: {article.author}</h5>
        <h5>Posted: {article.created_at}</h5>
        <h3>{article.title}</h3>
        <h5>Topic: {article.topic}</h5>
        <p>{article.body}</p>
        <button>Dislike</button>
        <p>{article.votes}</p>
        <button>Like</button>
        <h4>Comments</h4>
        <Comments id={this.props.id} />
      </div>
    );
  }

  componentDidMount() {
    getSingleArticle(this.props.id).then(article => {
      this.setState({ article });
    });
  }
}

export default SingleArticle;
