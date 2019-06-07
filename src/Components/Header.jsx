import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
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
              <FontAwesomeIcon className="icon" icon={faCloudRain} size="3x" />
            </Link>
            <h3
              style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
              className="mainheader"
            >
              Rain City News
            </h3>
            <Link to="/topics">
              <li className="header">
                <button
                  style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
                >
                  Topics
                </button>
              </li>
            </Link>
            {!this.props.currentUser ? (
              <li className="header">
                <button
                  style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
                  onClick={this.handleClick}
                >
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button
                  style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
                  onClick={this.props.logoutUser}
                >
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
    this.setState({ loginbox: !this.state.loginbox });
  };
}

export default Header;
