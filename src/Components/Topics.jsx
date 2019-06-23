import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import "../App.css";
import { Link } from "@reach/router";
import { getTopics } from "../Api";
import LoadingMessage from "./LoadingMessage";

class Topics extends React.Component {
  state = {
    topics: null
  };

  render() {
    return (
      <div id="topics">
        <GoogleFontLoader
          fonts={[
            {
              font: "IM Fell DW Pica SC",
              weights: [400, "400i"]
            }
          ]}
        />
        {this.state.topics ? (
          this.state.topics.map(topic => {
            return (
              <div key={topic.slug} className="center">
                <ul className="list">
                  <Link to={`/topics/${topic.slug}`}>
                    <button
                      style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
                    >
                      {topic.slug}
                    </button>
                  </Link>
                  <br />
                  <li style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
                    {topic.description}
                  </li>
                </ul>
              </div>
            );
          })
        ) : (
          <LoadingMessage />
        )}
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
