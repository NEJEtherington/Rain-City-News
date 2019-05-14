import React from "react";
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>NC News</h1>
        <button>Write an article</button>
        <button>Topics</button>
        <button>Login/Sign Up</button>
        <div class="dropdown">
          <button class="dropbtn">Sort by</button>
          <div class="dropdown-content">
            <a href="#">Title</a>
            <a href="#">Topic</a>
            <a href="#">Author</a>
            <a href="#">Date</a>
          </div>
        </div>
        <input type="text" value="Filter by author or topic" />
      </div>
    );
  }
}

export default Header;
