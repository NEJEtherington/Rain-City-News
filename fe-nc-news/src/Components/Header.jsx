import React from "react";
import "../App.css";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <Link to="/articles">
            <li className="ncnews">NC News</li>
          </Link>
          <Link to="/topics">
            <li className="header">
              <button>Topics</button>
            </li>
          </Link>
          {!props.loggedInUser ? (
            <Link to="/login">
              <li className="header">
                <button>Login</button>
              </li>
            </Link>
          ) : (
            <Link Link to="/login">
              <li>
                <button onClick={props.logoutUser}>
                  Logout: {props.loggedInUser}
                </button>
              </li>
            </Link>
          )}
          <li>
            <button>Create Post</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
