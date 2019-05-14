import React from "react";
import "../App.css";
import Topics from "./Topics";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>NC News</h1>
        <button>Create Post</button>
        <button onClick={this.handleTopicClick}>Topics</button>
        <button>Login/Sign Up</button>
        <div className="dropdown">
          <button className="dropbtn">Sort by</button>
          <div className="dropdown-content">
            <p>Title</p>
            <p>Topic</p>
            <p>Author</p>
            <p>Date</p>
          </div>
        </div>
        <input type="text" defaultValue="Filter by author or topic" />
      </div>
    );
  }

  handleTopicClick = event => {
    console.log("topics button clicked!");
  };
}

export default Header;
