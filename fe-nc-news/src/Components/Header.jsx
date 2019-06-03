import React from "react";
import "../App.css";
import { Link } from "@reach/router";
import LoginBox from "./LoginBox";

class Header extends React.Component {
  state = {
    loginbox: false
  };
  render() {
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
            {!this.props.currentUser ? (
              <li className="header">
                <button onClick={this.handleClick}>Login</button>
              </li>
            ) : (
              <li>
                <button onClick={this.props.logoutUser}>
                  Logout: {this.props.currentUser}
                </button>
              </li>
            )}
            {this.state.loginbox === true && !this.props.currentUser && (
              <LoginBox loginUser={this.props.loginUser} />
            )}
          </ul>
        </nav>
      </div>
    );
  }
  handleClick = () => {
    this.setState({ loginbox: true });
  };
}

export default Header;
