import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { getUser } from "../Api";

class LoginBox extends React.Component {
  state = {
    userNameInput: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <GoogleFontLoader
          fonts={[
            {
              font: "IM Fell DW Pica SC",
              weights: [400, "400i"]
            },
            {
              font: "IM Fell DW Pica",
              weights: [400, "400i"]
            }
          ]}
        />
        <input
          style={{ fontFamily: "IM Fell DW Pica, monospaced" }}
          id="textInput"
          onChange={this.handleInput}
          type="text"
          placeholder="Enter username"
        />
        <button style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}>
          Go!
        </button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    getUser(this.state.userNameInput).then(user => {
      return this.props.loginUser(user.username);
    });
  };

  handleInput = event => {
    this.setState({ userNameInput: event.target.value });
  };
}

export default LoginBox;
