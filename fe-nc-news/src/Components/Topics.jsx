import React from "react";
import "../App.css";
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
                <li>{topic.description}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log("mounted");
    getTopics().then(topics => {
      this.setState({ topics });
    });
  }
}

export default Topics;
