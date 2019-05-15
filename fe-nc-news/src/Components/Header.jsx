import React from "react";
import "../App.css";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>NC News</h1>
        <button>Create Post</button>
        <Link to="/topics">
          <button>Topics</button>
        </Link>
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
}

export default Header;
