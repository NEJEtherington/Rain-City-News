import React from "react";
import { getUser } from "../Api";

class LoginBox extends React.Component {
  state = {
    userNameInput: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInput}
          type="text"
          placeholder="Enter username"
        />
        <button>Go!</button>
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
