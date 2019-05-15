import React from "react";
import "../App.css";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <Link to="/articles">
            <li className="ncnews">NC News</li>
          </Link>
          <Link to="/topics">
            <li className="header">Topics </li>
          </Link>
          <li className="header">Login/Sign Up</li> <li>Create Post</li>
          <li className="header">
            <form>
              <input type="text" placeholder="Filter by author or topic" />
              <button>Submit</button>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
