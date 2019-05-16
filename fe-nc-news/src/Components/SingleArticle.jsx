import React from "react";
import { getSingleArticle } from "../Api";
import Comments from "./Comments";
import Voter from "./Voter";

class SingleArticle extends React.Component {
  state = {
    article: null
  };

  render() {
    const { article } = this.state;
    return (
      <div>
        {article ? (
          <div>
            <h5>Author: {article.author}</h5>
            <h5>Posted: {article.created_at}</h5>
            <h3>{article.title}</h3>
            <h5>Topic: {article.topic}</h5>
            <p>{article.body}</p>
            <Voter
              votes={article.votes}
              id={article.article_id}
              type="article"
            />
            <h4>Comments</h4>
            <Comments id={this.props.id} />
          </div>
        ) : (
          <p>loading...</p>
        )}
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
