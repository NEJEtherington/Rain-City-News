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
          {!props.currentUser ? (
            <Link to="/login">
              <li className="header">
                <button>Login</button>
              </li>
            </Link>
          ) : (
            <li>
              <button onClick={props.logoutUser}>
                Logout: {props.currentUser}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
