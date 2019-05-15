import React from "react";
import "../App.css";
import { Link } from "@reach/router";
import { getTopics } from "../Api";

class Topics extends React.Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div>
        {this.state.topics.map(topic => {
          return (
            <div key={topic.slug}>
              <ul className="list">
                <Link to={`/topics/${topic.slug}`}>
                  <li>{topic.description}</li>
                </Link>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    getTopics().then(topics => {
      this.setState({ topics });
    });
  }
}

export default Topics;
